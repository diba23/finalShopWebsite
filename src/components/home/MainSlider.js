import React, { useState } from 'react';
import { Container, IconButton, MobileStepper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://dkstatics-public.digikala.com/digikala-adservice-banners/28d1202aad5405be2c3ffb014c474486404991b6_1626699788.jpg?x-oss-process=image/quality,q_80&quot',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        width: theme.spacing(90),
        height: theme.spacing(40),
        position: 'relative',
        marginBottom: '10px'
    },
    img: {
        height: theme.spacing(40),
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        position: 'absolute',
        zIndex: '0'
    },
    content: {
        marginTop: theme.spacing(3),
        width: theme.spacing(90),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btn: {
        top: '125px',
        right: '13px',
        position: 'absolute',
        zIndex: '1',
        '&:hover': {
            backgroundColor: '#fefefe'
        },

    },
    btn2: {
        top: '125px',
        right: '660px',
        position: 'absolute',
        zIndex: '1',
        '&:hover': {
            backgroundColor: '#fefefe'
        }
    }

}));

function MainSlider() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 3;

    return (
        <Container>
            <div className={classes.root}>
                <div className={classes.content}>

                    <Paper className={classes.paper}>
                        <IconButton className={classes.btn} onClick={() => { setActiveStep(activeStep - 1) }} disabled={activeStep === 0}>
                            <NavigateNextIcon color="action" />
                        </IconButton>

                        <img
                            className={classes.img}
                            src={tutorialSteps[activeStep].imgPath}
                            alt={tutorialSteps[activeStep].label}
                        />


                        <IconButton className={classes.btn2} onClick={() => { setActiveStep(activeStep + 1) }} disabled={activeStep === maxSteps - 1}>
                            <NavigateBeforeIcon color="action" />
                        </IconButton>
                    </Paper>


                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                    />
                </div>
            </div>
        </Container>
    );
}


export default MainSlider;