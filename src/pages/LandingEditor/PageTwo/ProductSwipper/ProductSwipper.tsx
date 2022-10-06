import { HiStar } from "react-icons/hi";
import styles from "./ProductSwipper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
export function ProductSwipper() {
  return (
    <div className={styles.products}>
      <Swiper
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
            slidesPerView: 3,
          },
          1400: {
            width: 1400,
            slidesPerView: 4,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <SwiperSlide>
            <div className={styles.product}>
              <div className={styles.product_image}>
                <img src={"https://imgs.pontofrio.com.br/55030361/1xg.jpg"} />
              </div>
              <div className={styles.product_content}>
                <h1>Jogo War Grow</h1>
                <div className={styles.product_star}>
                  {[1, 2, 3, 4, 5].map(() => (
                    <HiStar />
                  ))}
                  <span>(26)</span>
                </div>
                <p>
                  De: <span>R$ 62,90</span>
                </p>
                <p>
                  <span>Por</span> R$149,90
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
