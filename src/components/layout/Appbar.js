import { makeStyles, alpha } from '@material-ui/core';
import React from 'react';
import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Avatar } from '@material-ui/core';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Footer from './Footer';







const useStyles = makeStyles((theme) => {
    return {
        avatar: {
            marginLeft: theme.spacing(2),
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%'
        },
        root: {
            display: 'flex'
        },
        toolbar: theme.mixins.toolbar,

        titel: {
            flexGrow: 1
        },
        icon:{
            marginRight: theme.spacing(2)
        }, search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 28),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            
        }, 
        
        contnet: {
            marginTop: theme.spacing(10),
        }
    }
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function Appbar ({ children }) {
    const classes = useStyles();


    return (
        <div className={classes.root} jss={jss}>


            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                   
                    <Avatar src="/logo-jewellery.jpg" className={classes.avatar} edge="start"/>

                    <Typography variant="h6" className={classes.titel}>
                        Moon Jewellery
                    </Typography>


                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="جستجو…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>


                    <IconButton aria-label="show 17 new notifications" color="inherit" className={classes.icon}>
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>


                    <IconButton
                        className={classes.icon}
                        color="inherit"
                    >
                        <ShoppingBasketRoundedIcon/>
                    </IconButton>


                    <IconButton
                        edge="end"
                        className={classes.icon}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                   
                </Toolbar>
            </AppBar>


           
           
           

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                <Navbar />
                {children}
                <Footer/>
            </div>

        </div>
    );
}

export default Appbar;