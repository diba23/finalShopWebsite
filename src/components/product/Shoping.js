import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const theme = createTheme({
    overrides:{
        MuiListItem:{
            root:{
                textAlign:'right',
                paddingTop: '0px' ,
                paddingBottom:'0px',
            }
        },
        MuiListItemIcon:{
            root:{
                minWidth:'32px'
            }
        }
    }
});

const useStyles = makeStyles((theme)=>({
  boxColor:{
        borderBottomColor : "grey.500"
  },
    shopCardContent: {
        height: '250px',
    },
     shopCard:{
         height: '100%'
     }

}));

const Shoping = ({result})=>{
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
        <Card className={classes.shopCard}>
            <Box textAlign="right" borderBottom={1}  >
            <CardHeader
                dir={result.alt || "rtl"}
                title={result.title || "گوشواره زنانه"}
                subheader="September 14, 2016"
            />
            </Box>
            <CardContent className={classes.shopCardContent}>

                <List>
                    <ListItem textAlign="right" >
                        <ListItemIcon>
                            <TocOutlinedIcon color="disabled" />
                        </ListItemIcon>
                            <ListItemText secondary="دسته:" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon  color="disabled" />
                        </ListItemIcon>
                            <ListItemText secondary="تعداد فروش:" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <VisibilityOutlinedIcon color="disabled"/>
                        </ListItemIcon>
                            <ListItemText secondary="تعداد بازدید:" />
                    </ListItem>
                </List>    


                <Divider />
                <Box textAlign="right" p={2} display="flex">
                    <BeenhereOutlinedIcon/>
                    <Typography display="inline">گارانتی اصالت و سلامت فیزیکی کالا</Typography>
                </Box>
                <Divider/>
                <Box textAlign="right" p={2} display="flex">
                    <BookOutlinedIcon/>
                    <Typography display="inline" >موجود در انبار فروشنده</Typography>
                </Box>
                <Divider />
                <Box textAlign="left" p={2} >
                        <Typography>{result.prise || "26000 تومان"}</Typography>
                </Box>
                
            </CardContent>
            <CardActions disableSpacing>
                <Button variant="contained" color="secondary" disableElevation fullWidth size="large">
                    افزودن به سبد خرید
                </Button>
            </CardActions>
        </Card>
        </ThemeProvider>
    );

}


export default Shoping ;








// borderBottom = { 1} borderColor = "grey.500" className = { classes.boxColor }