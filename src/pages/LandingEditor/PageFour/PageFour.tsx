import React, { useRef } from "react";
import { Layout } from "../../../components/Layout/Layout";
import styles from "./PageFour.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import { Row } from "../../../components/Row/Row";
import { HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import { SizedBox } from "../../../components/SizedBox/SizedBox";
import { Box } from "../../../components/Box/Box";
export function PageFour() {
  const preRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Layout>
      <Row>
        <div className={styles.swiper}>
          <Swiper
            navigation
            style={{ position: "relative" }}
            modules={[Navigation, Thumbs, Pagination]}
            scrollbar={{
              el: ".swiper-scrollbar",
            }}
            className={styles.pagination_swiper}
          >
            <SwiperSlide>
              <div className={styles.image}>
                <img
                  src={
                    "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/banner-tv-01.png"
                  }
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.image}>
                <img
                  src={
                    "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/banner-tv-01.png"
                  }
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Row>
      <SizedBox height={10} />
      <Row>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/loja-apple_iphone.jpg"
              }
            />
          </div>
        </Box>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/loja-apple_iphone.jpg"
              }
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/07-jul/05/loja-apple/loja-apple_appletv.png"
              }
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/07-jul/05/loja-apple/loja-apple_appletv.png"
              }
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/07-jul/05/loja-apple/loja-apple_appletv.png"
              }
            />
          </div>
        </Box>
      </Row>
      <Row>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/loja-apple_iphone.jpg"
              }
            />
          </div>
        </Box>
        <Box>
          <div className={styles.img_responsive}>
            <img
              src={
                "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/10-out/loja-apple/images/loja-apple_iphone.jpg"
              }
            />
          </div>
        </Box>
      </Row>
    </Layout>
  );
}
