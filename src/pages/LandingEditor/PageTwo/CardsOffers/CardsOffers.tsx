import styles from "./CardsOffers.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBanner from "../../../../resource/banner/card.png";
export function CardsOffers() {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={16}
      autoplay={true}
      breakpoints={{
        320: {
          width: 320,
          slidesPerView: 2,
        },
        400: {
          width: 400,
          slidesPerView: 2,
        },

        768: {
          width: 768,
          slidesPerView: 4,
        },
        1400: {
          width: 1400,
          slidesPerView: 4,
        },
        1900: {
          width: 1900,
          slidesPerView: 4,
        },
      }}
      slidesPerView={4}
    >
      {[1, 2, 3, 4, 5, 6].map(() => (
        <SwiperSlide>
          <div className={styles.card}>
            <img src={cardBanner} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
