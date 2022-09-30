import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import arrow from "../../resource/img/arrow.png";
import styles from "./SwiperBanner.module.scss";
import banner from "../../resource/landing/banner.webp";
export function SwiperBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content_arrow}>
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
          spaceBetween={10}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          className={styles.navigation}
        >
          <SwiperSlide>
            <img src={banner} alt={""} />
          </SwiperSlide>
        </Swiper>
        <div className="prev">
          <img src={arrow} />
        </div>
        <div className="next">
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}
