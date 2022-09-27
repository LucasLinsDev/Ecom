import styles from './Hero.module.scss';
import banner from '../../resource/img/banner.png';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation,Thumbs} from 'swiper';
import arrow from '../../resource/img/arrow.png'
import { Banners } from '../../libs/http/banners/banners.types';

interface HeroProps{
  data:[any]
  
}

export function Hero(data:HeroProps){

  console.log(data);
  
  return (
    <div className={styles.banner}>

      <div className={styles.content_arrow}>

      <Swiper
        
        navigation={{
          prevEl:'.prev',
          nextEl:'.next',
        }}

        loop={true}
        spaceBetween={10}
        modules={[Navigation,Thumbs]}
        grabCursor={true}
        className={styles.navigation}
      >

        {[1,2,3,4,5].map((index)=>(
           <SwiperSlide key={index}>
             <img src={banner} alt=""/>
           </SwiperSlide>
        ))} 
    
    
      </Swiper>

      <div className='prev'><img src={arrow}/></div>
      <div className='next'><img src={arrow}/></div>

      </div>

    </div>
  )
}