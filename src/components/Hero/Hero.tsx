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
  data:any
}



export function Hero({data}:any){

  
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
          {!data ?(
            <SwiperSlide >
              <img src={banner} alt=""/>
            </SwiperSlide>
          ) : (
           <>
           {data.map((item:any)=>(
             <SwiperSlide key={item._id}>
                <img src={item.url} alt={item.title}/>
            </SwiperSlide>
            ))}
           </>
         )}
        
  

         

    
    
      </Swiper>

      <div className='prev'><img src={arrow}/></div>
      <div className='next'><img src={arrow}/></div>

      </div>

    </div>
  )
}