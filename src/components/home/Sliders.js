import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper/core';
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Link} from "react-router-dom";


import 'swiper/swiper-bundle.css';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "../../asset/css/style.css";

SwiperCore.use([Pagination, Navigation, Virtual]);




const useStyle = makeStyles((theme) => {
    return {
        seeALL: {
            color: '#ff9100'
        }, 
        media: {
            height: '25px',
            paddingTop: '56.25%',
        },
        cardRoot:{
            height: '100%',
            width:'100%'
        },
        content:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center'
        }
    }
});

const Sliders = ({info}) => {
    const classes = useStyle();
   


    return (
        <Container>
            <div className="containerr">

                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography variant="h5">محصولات</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.seeALL} >مشاهده بیشتر</Typography>
                    </Box>
                </Box>

                <Box className="sliderBody ">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        pagination={{ "clickable": true }}
                        navigation={true}
                        className="hoomSwiper"
                        style={{ '--swiper-navigation-color': '#ffb300', '--swiper-pagination-color': '#ffb300' }}
                    >

                        {info.map((slideContent) => (
                            <SwiperSlide key={slideContent.id} >
                                <Card className={classes.cardRoot} >
                                    <CardActionArea className={classes.cardRoot} >


                                        <Link to={`/product/${slideContent.id}`} style={{ textDecoration: 'none' }} color="textSecondary" >
                                    <CardMedia
                                        className={classes.media}
                                        image={slideContent.image}
                                        title={slideContent.title}
                                    />


                                    <CardContent className={classes.content}>
                                         <Typography variant="body2" component="p" color="textSecondary">
                                            {slideContent.details}
                                        </Typography>
                                        
                                        <Typography variant="subtitle2" component="p" color="textSecondary">
                                         قیمت: {slideContent.prise}
                                        </Typography>
                                    </CardContent>
                                  

                                        </Link>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Box>

            </div>
        </Container>
    );
};

export default Sliders;




