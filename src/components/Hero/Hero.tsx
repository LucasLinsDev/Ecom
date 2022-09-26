import styles from './Hero.module.scss';
import banner from '../../resource/img/banner.png';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation,Thumbs} from 'swiper';

import arrow from '../../resource/img/arrow.png'
import { NewProducts } from './NewProducts/NewProducts';



export function Hero(){
  
  
  return (
    <>
      <div className={styles.banner}     data-testid='swiper'>

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

        {[1,2,3,4,5].map(()=>(
           <SwiperSlide>
             <img src={banner} alt=""/>
           </SwiperSlide>
        ))}
      </Swiper>

      <div className='prev'><img src={arrow}/></div>
      <div className='next'><img src={arrow}/></div>

      </div>

    </div>
      <NewProducts/>
    </>
  )
}