import { Box } from "../../components/Box/Box";
import { Layout } from "../../components/Layout/Layout";
import { Row } from "../../components/Row/Row";
import styles from "./ProductPage.module.scss";
import product from "../../resource/products/Image.png";
import product1 from "../../resource/products/image2.png";
import { SizedBox } from "../../components/SizedBox/SizedBox";
import { HiOutlineMinusSm, HiOutlinePlusSm, HiStar } from "react-icons/hi";
import { Radio } from "../../components/Form/Radio/Radio";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import arrow from "../../resource/img/arrow.png";
import { CartProduct } from "../../components/Card/Product/CardProduct";
import { useRef } from "react";
import { CardProduct } from "../../components/Card/CardProduct/CardProduct";

export function ProductPage() {
  const preRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Layout>
      <SizedBox height={32} />
      <Row responsive>
        <Box flex={1} width={720}>
          <div className={styles.product}>
            <div>
              <img src={product1} />
              <img src={product1} />
              <img src={product1} />
              <img src={product1} />
            </div>
            <div>
              <img src={product} />
            </div>
          </div>
        </Box>
        <Box flex={1}>
          <div className={styles.product_info}>
            <h1>LOREM IPSUM</h1>
            <span>$50.00</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quisquam, excepturi adipisci consequatur nemo quae sit quidem odio
              culpa placeat ipsa vitae quaerat perferendis minima fugit
              asperiores laboriosam, quod repudiandae explicabo?
            </p>
            <a href="#">Size guide</a>
          </div>
          <div className={styles.product_size}>
            <select>
              <option>XL</option>
              <option>XL</option>
              <option>XL</option>
              <option>XL</option>
            </select>
          </div>
          <div className={styles.product_buttons}>
            <div className={styles.inputs}>
              <HiOutlineMinusSm />
              <span>1</span>
              <HiOutlinePlusSm />
            </div>
            <button>ADD TO CART</button>
            <button>Pick up in store</button>
          </div>
          <div className={styles.products_colors}>
            <div>
              <p>Colors:</p>
            </div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
        </Box>
      </Row>
      <SizedBox height={32} />
      <Row>
        <div className={styles.product_title}>
          <h1>We found other products you might like</h1>
        </div>
      </Row>
      <Row>
        <div className={styles.products}>
          <Swiper
            slidesPerView={4}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = preRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation, Thumbs]}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <SwiperSlide>
                <CardProduct />
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={preRef}>
            <img src={arrow} />{" "}
          </div>
          <div ref={nextRef}>
            <img src={arrow} />{" "}
          </div>
        </div>
      </Row>
    </Layout>
  );
}
