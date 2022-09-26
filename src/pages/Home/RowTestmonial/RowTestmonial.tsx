
import styles from './RowTestmonial.module.scss';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Thumbs } from 'swiper';
export function RowTestmonial(){
  return(
    <Swiper
               modules={[Navigation,Thumbs]}
                  loop={true}
                  className={styles.testmonial}
                  slidesPerView={1}
                  grabCursor={true}
        >
            {[1,2,3,4,5].map((index)=>(
                 <SwiperSlide>
                     <div className={styles.testmonial_content}>
                       <div className={styles.content}>
                        My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                        <p>-Tomas Browen</p>
                        
                      </div>
                      <button>Leave Us A Review</button>
                     </div>
                </SwiperSlide>
            ))}
    </Swiper>
  )
}