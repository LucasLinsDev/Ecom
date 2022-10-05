import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { BG } from "../../../components/BG/BG";
import { Container } from "../../../components/Container/Container";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./PageTwo.module.scss";
import arrow from "../../../resource/img/arrow.png";
import { BannerSwipper } from "../../Product/BannerSwipper/BannerSwipper";
import banner from "../../../resource/img/banner.png";
import { SizedBox } from "../../../components/SizedBox/SizedBox";
import { CardProduct } from "../../../components/Card/CardProduct/CardProduct";
export function PageTwo() {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Layout max>
      <BG color="black">
        <Container width={1440}>
          <div className={styles.categories_swiper}>
            <Swiper
              onInit={(swiper: any) => {
                swiper.params.navigation.prevEl = preRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className={styles.swiper_wrapper}
              modules={[Navigation, Thumbs]}
              grabCursor={true}
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 3,
                },
                400: {
                  width: 400,
                  slidesPerView: 3,
                },

                768: {
                  width: 768,
                  slidesPerView: 5,
                },
                1400: {
                  width: 1400,
                  slidesPerView: 8,
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
                <SwiperSlide>
                  <div className={styles.card_swiper}>
                    <img src="https://www.pontofrio-imagens.com.br/criacao/01-home-2/00-header/2022/09-set/19/cupom.png" />
                    <span>use: PONTO</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={preRef}>
              <img src={arrow} />
            </div>
            <div ref={nextRef}>
              <img src={arrow} />
            </div>
          </div>
        </Container>
      </BG>
      <Container width={1440}>
        <Swiper slidesPerView={1}>
          {[1, 2, 3].map(() => (
            <SwiperSlide>
              <div className={styles.swipper}>
                <img src={banner} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SizedBox height={50} />
      </Container>
    </Layout>
  );
}
