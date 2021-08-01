import React , {useEffect,useState}from 'react';
import { Container } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import MainSlider from '../components/home/MainSlider';
import Sliders from '../components/home/Sliders';
import axios from 'axios';



function Home (){
    const [result,setResult]=useState([]);

    useEffect(()=>{
        const info = async ()=>{
           const {data} = await axios.get('http://localhost:8000/pslider');
           setResult(data);
        }

        info();
    },[])
    

    return(
        <Container>
            <div className={classes.root}>
                <MainSlider/>
            </div>
            
            <div>
                
                <Sliders info={result}/>
                
            </div>
        </Container>
    );
}


export default Home;