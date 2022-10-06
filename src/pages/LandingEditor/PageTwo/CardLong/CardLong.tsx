import styles from "./CardLong.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiStar } from "react-icons/hi";
import { SizedBox } from "../../../../components/SizedBox/SizedBox";
export function CardLong() {
  return (
    <div className={styles.card_long}>
      <div className={styles.card_left}>
        <h1>LOREM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          voluptates, sed debitis.
        </p>
      </div>
      <div className={styles.card_right}>
        <Swiper>
          {[1, 2, 3, 4, 5].map(() => (
            <SwiperSlide>
              <div className={styles.product}>
                <div className={styles.product_image}>
                  <img src={"https://imgs.pontofrio.com.br/55030361/1xg.jpg"} />
                </div>
                <div className={styles.product_content}>
                  <h1>
                    Geladeira Brastemp BRM44HK Frost Free Duplex com
                    Compartimento Extrafrio e Fresh Zone Inox - 375L Avaliação
                    dos usuários: 703 (703)
                  </h1>
                  <div className={styles.product_star}>
                    {[1, 2, 3, 4, 5].map(() => (
                      <HiStar />
                    ))}
                    <span>(26)</span>
                  </div>
                  <SizedBox height={16} />
                  <button>Confira</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
