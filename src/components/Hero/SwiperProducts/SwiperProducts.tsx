import styles from './SwiperProducts.module.scss';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Thumbs } from 'swiper';
import { CartProduct } from '../../Card/Product/CardProduct';

import ps5 from '../../../resource/img/ps5.png'
import arrow from '../../../resource/img/arrow.png';

export function SwiperProducts(){
 

  return (
    <div className={styles.content_arrow}>
            <Swiper
                navigation={{
                  prevEl:'.prev1',
                  nextEl:'.next2',
                }}
                spaceBetween={10}
                data-test-id='swiper_products'
                modules={[Navigation,Thumbs]}
                grabCursor={true}
                className={styles.swiper_adpted}
                breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1.8,
                },
                400: {
                  width: 400,
                  slidesPerView: 2,
                },
           
                768: {
                  width: 768,
                  slidesPerView: 5,
                },
                 1400: {
                  width: 1400,
                  slidesPerView:6,
                },
              }}
           >        
               {[1,2,3,4,5,6,7,8,9].map(()=>(
                <SwiperSlide >
                    <CartProduct image={ps5} title='PS5' price='999.99' star={6}/>
              </SwiperSlide>
               ))}
            
              
          </Swiper>
            <div className='prev1'><img src={arrow}/></div>
            <div className="next2"><img src={arrow}/></div>
    </div>
  )
}