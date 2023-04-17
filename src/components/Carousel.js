import React from 'react';
import Slider from 'react-slick';
import CardAiring from './CardAiring'
import {getAiring} from '../store'
import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [topAiring, setTopAiring] = useState([])
  
  useEffect(() => {
    getAiring().then((result) => {
      setTopAiring(result)
    })
  }, [])
  
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className=" ml-8">
      <Slider {...settings}>
      {topAiring.map((a, i) => (
      <div key={i} className="rounded-lg overflow-hidden">
      <CardAiring eps={a.latestEp} title={a.animeTitle || a.animeId} img={a.animeImg}
      />
      </div>
      ))}
      </Slider>
    </div>
  );
};

export default Carousel;
