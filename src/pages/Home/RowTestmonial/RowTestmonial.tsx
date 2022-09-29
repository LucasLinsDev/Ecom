import styles from "./RowTestmonial.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { Testmonials } from "../../../libs/http/testmonial/testmonial.types";

interface RowTestmonial {
  data: Testmonials[];
}
export function RowTestmonial({ data }: RowTestmonial) {
  return (
    <Swiper
      modules={[Navigation, Thumbs]}
      loop={true}
      className={styles.testmonial}
      slidesPerView={1}
      grabCursor={true}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className={styles.testmonial_content}>
            <div className={styles.content}>
              {item.richText}
              <p>{item.author}</p>
            </div>
            <button>Leave Us A Review</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
