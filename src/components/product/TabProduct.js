import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableProduct from './TableProduct';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    shoBox:{
        // height: '350px',
    }
}));


function TabPanel(props) {
    const classes = useStyles()
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} className={classes.shoBox} >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const TabProduct = ({result}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary"
                    textColor="primary" >
                    <Tab label="مشخصات" {...a11yProps(0)} />
                    <Tab label="توضیحات" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TableProduct result={result} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography>esigned for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features</Typography>
            </TabPanel>
        </div>
    );
}

export default TabProduct;