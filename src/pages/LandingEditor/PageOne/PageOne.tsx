import { Fragment } from "react";
import styles from "./PageOne.module.scss";
import product from "../../../resource/products/computador.png";
import { HiStar } from "react-icons/hi";
import { RiSeparator } from "react-icons/ri";
import brand from "../../../resource/products/zip.png";
import { Layout } from "../../../components/Layout/Layout";
import { Companies } from "../../../components/Card/Companies/Companies";
export function PageOne() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.hero_left}></div>
        <div className={styles.hero_right}>
          <div className={styles.hero_right_content}></div>
          <div className={styles.hero_right_content}></div>
        </div>
      </section>
      <section className={styles.cards}>
        {[1, 2, 3].map(() => (
          <div className={styles.card_infos}>s</div>
        ))}
      </section>

      <section className={styles.products}>
        <div className={styles.products_header}>
          <h1>NEW ARRIVAL PRODUCT</h1>
        </div>
        <div className={styles.product_row}>
          {[1, 2, 3, 4].map(() => (
            <div className={styles.product_card}>
              <div className={styles.product_image}>
                <img src={product} />
              </div>
              <div className={styles.product_content}>
                <div className={styles.star}>
                  {[1, 2, 3, 4, 5].map(() => (
                    <HiStar size={18} color="#BAAF94" />
                  ))}
                </div>
                <p className={styles.product_title}>Pc Gamer GTX 1060</p>-
                <p className={styles.product_price}>
                  $128<span> $128</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.banner}></section>

      <section className={styles.cards}>
        {[1, 2, 3].map(() => (
          <div className={styles.card_infos}>s</div>
        ))}
      </section>

      <Companies />
    </Layout>
  );
}
