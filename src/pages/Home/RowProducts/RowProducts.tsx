import styles from './RowProducts.module.scss';
import { CartProduct } from '../../../components/Card/Product/CardProduct';


import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Thumbs } from 'swiper';
import { useRef } from 'react';
import ps5 from '../../../resource/img/ps5.png';
import arrow from '../../../resource/img/arrow.png';
import { Banner } from '../../../components/Banner/Banner';

export function RowProducts(){

  const preRef=useRef(null);
  const nextRef=useRef(null);


  return (
    <div className={styles.container_products}>
      <div className={styles.header}>
        <button className={`${styles.filter} ${styles.filter_active}`}>
            MSI GS Series
        </button>
        <button className={styles.filter}>
            MSI GS Series
        </button>
         <button className={styles.filter}>
            MSI GS Series
        </button>
      </div>
      <div className={styles.row}>
        
              <Banner/>
       
    
              <Swiper 
                  onInit={(swiper:any) => {
                    swiper.params.navigation.prevEl = preRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  loop={true}
                  className={styles.swiper_wrapper}
                  modules={[Navigation,Thumbs]}
                  grabCursor={true}
                  slidesPerView={6}
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
                
                }}>
                
                  {[1,2,3,4,5,6,7,8,9,10].map(()=>(
                      <SwiperSlide>
                          <CartProduct title='PS5' price='999.99' image={ps5} />
                        </SwiperSlide>
                  ))}
                   <div ref={preRef}>  <img src={arrow}/>    </div>
                   <div ref={nextRef}> <img src={arrow}/>    </div>
        
              </Swiper>
            
     
      </div>
    </div>
    )
}