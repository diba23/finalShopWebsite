import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PiGallery from '../components/product/PicGallery';
import Shoping from '../components/product/Shoping';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import TabProduct from '../components/product/TabProduct'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    box: {
        textAlign: 'center',
        height: 440,
        width: '100%'
    },
    tabBox: {
        marginTop: 25,
        width: '100%'
    }
}));

function Product() {
    const classes = useStyles();
    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const params = useParams();

    console.log(result2);

    useEffect(() => {
        
        
        const productP = async () => {
            const { data } = await axios.get(`http://localhost:8000/picture/${params.id}`);
            setResult(data);
    
            const i = await axios.get(`http://localhost:8000/products/${params.id}`);
            setResult2(i.data);
            console.log(i);
           
    
        }

        productP();


    }, [params.id])



    return (
        <div style={{ paddingTop: 60 }} jss={jss}>
            <Container maxWidth="lg" >
                <Grid container className={classes.root} spacing={4} justifyContent="center" >
                    <Grid item xs={12} sm={6} justifyContent="center" container>
                        <Box className={classes.box}>
                            <PiGallery result={result} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} justifyContent="center" container>
                        <Box bgcolor="success.main" className={classes.box}>
                            <Shoping result={result} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} justifyContent="center" container >
                        <Box bgcolor="success.main" className={classes.tabBox}>
                            <TabProduct result={result2} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}


export default Product;