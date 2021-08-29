import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=>({
    root: {
        height: 250,
        width: '100%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    mediaContent: {
        display: 'flex',
    }

}));

const Carts =()=>{
    const classes = useStyles();

    return(
        <Card className={classes.root} style={{ backgroundColor:'#999999'}} >
            <div className={classes.details} >
                <div className={classes.mediaContent}>
                    <CardMedia
                        className={classes.cover}
                        image="https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
                        title="Live from space album cover"
                    />
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                </div>

                <div className={classes.controls}></div>
            </div>
        </Card>
    )
}


export default Carts ;
















{/* <Grid container spacing={2}>
    <Grid item>
        <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
        />
    </Grid>
    <Grid item xs container direction="column" spacing={2} >
        <Grid item xs >
           
        </Grid>
        <Grid item >
           
        </Grid>
    </Grid>
</Grid> */}


{/* <Grid container spacing={2} style={{ width: '100%', height: '100%' }}>
    <Grid item container direction="column" spacing={2} sm={4} xs={4}  >

        <Grid item sm xs >
            <Paper style={{ backgroundColor: "skyblue", width: '100%', height: '100%' }} />
        </Grid>
        <Grid item sm xs >
            <Paper style={{ backgroundColor: "skyblue", width: '100%', height: '100%' }} />
        </Grid>

    </Grid>
    <Grid item container direction="column" spacing={2} sm={8} xs={8} >
        <Paper style={{ backgroundColor: 'red', width: 50, height: 350 }} />
    </Grid>
</Grid> */}