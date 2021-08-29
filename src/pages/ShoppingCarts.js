import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Carts from '../components/shoppingCarts/Carts';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 250,
        width: '100%',
    },
    control: {
        padding: theme.spacing(2),
    },
}));


const ShoppingCarts = () => {
    const classes = useStyles();

    return (
        <div>
            <Box bgcolor="grey.200" color="white" px={{ xs: 2, sm: 7 }} py={{ xs: 5, sm: 5 }} mt={1}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={8} container direction="column" spacing={2}>
                            <Grid item>
                                <Carts/>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper} />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={4} >
                            <Box>
                                <Card >
                                    <CardHeader
                                        title="مجموع کل سبد خرید"
                                    />
                                    <CardContent>
                                        <Box display="flex" py={1} >
                                            <Box flexGrow={1}><Typography>قیمت کالاها</Typography></Box>
                                            <Box><Typography>۵۸۸,۴۰۰ تومان</Typography></Box>
                                        </Box>

                                        <Box display="flex" pb={2} pt={1} >
                                            <Box flexGrow={1}><Typography>تخفیف کالاها</Typography></Box>
                                            <Box><Typography>۱۱۷,۶۰۰ تومان</Typography></Box>
                                        </Box>
                                        <Divider />
                                        <Box display="flex" py={2} >
                                            <Box flexGrow={1}><Typography>جمع سبد خرید</Typography></Box>
                                            <Box><Typography>۴۷۰,۸۰۰ تومان</Typography></Box>
                                        </Box>
                                    </CardContent>

                                    <CardActions>
                                        <Button variant="contained" color="secondary" disableElevation fullWidth size="large" >
                                            اقدام به پرداخت
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};


export default ShoppingCarts;
















