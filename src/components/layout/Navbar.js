import React, { useState, useRef } from 'react';
import { AppBar, ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import MenuList from '@material-ui/core/MenuList';




const useStyles = makeStyles((theme) => {
    return {
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
        },
        btn: {
            marginRight: theme.spacing(4)
        },
        appbar: {
            backgroundColor: '#fefefe'
        }
    }
});



function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [corentItem, setCorentItem] = useState();


    const handleClick = (e, item) => {

         if (item.path) {
             history.push(item.path);
             setOpen(false);
         }else{
             setCorentItem(item);
             setOpen(!open);
         }


    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }

    const menuItems = [
        {
            text: 'خانه',
            path: '/',
            list: null
        },
        {
            text: 'محصولات',
            path: null,
            list: [
                { text: 'nechkles', path: '/nechles' },
                { text: 'nechkles', path: '/nechles' },
                { text: 'nechkles', path: '/nechles' },
                { text: 'nechkles', path: '/nechles' }
            ]
        },
        {
            text: 'تماس باما',
            path: '/contact',
            list: null
        },
        {
            text: '',
            path: '',
            list: null
        }
    ]

    return (
        <div>
            <AppBar position="static" className={classes.appbar} >

                <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.btn}
                    
                >
                    {menuItems.map((item) => (

                        <Button ref={anchorRef} aria-controls={item.text} key={item.text} size="large" onClick={(e) => handleClick(e, item)}>
                            {item.text}
                        </Button>
                    ))}
                </ButtonGroup>

            </AppBar>

            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
            </Breadcrumbs>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: 10 }}>
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <div>
                            <h2>hello</h2>
                            {corentItem && <MenuList
                                id={`${open ? corentItem.text : undefined}`}
                                
                            >
                                {corentItem.list.map((i) => {
                                    console.log(i)
                                    return (
                                        
                                        <MenuItem onClick={handleClose}  >{i.text}</MenuItem>
                                    );
                                })}
                            </MenuList>}
                        </div>
                    </ClickAwayListener>
                </Paper>
            </Popper>

        </div>
    );
}


export default Navbar;