import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { EditorPage } from "./EditorPage/EditorPage";
import styles from "./Landing.module.scss";
import banner from "../../resource/landing/banner_01.gif";
import { SwiperBanner } from "../../components/SwiperBanner/SwiperBanner";
import column from "../../resource/landing/column.webp";
import oportunity from "../../resource/landing/oportunity.webp";
import column3 from "../../resource/landing/column3.webp";
export function Landing() {
  return (
    <Layout>
      <div className={styles.landing_banner}>
        <img src={banner} />
        <SwiperBanner />
        <section className={styles.columns}>
          <div className={styles.columns_items}>
            {[1, 2, 3, 4].map(() => (
              <div className={styles.column_content}>
                <img src={column} />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.columns_oportunit}>
          <h2>As melhores oportunidades para as suas compras!</h2>
          <div className={styles.columns_row}>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <>
                <div className={styles.columns_oportunit_item}>
                  <img src={oportunity} alt={""} />
                  <p>Ofertas Campeas</p>
                </div>
              </>
            ))}
          </div>
        </section>
        <section className={styles.columns}>
          <div className={styles.columns_items_columns}>
            {[1, 2, 3].map(() => (
              <div className={styles.column_content_column}>
                <img src={column3} />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.row_item}>
          <div className={styles.row_item_content}>
            <div className={styles.item}>
              <img
                src={
                  "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/94932150-50f4-43c8-b916-38ca3d179c2c___b1e4c83ffc6b7c9c4755f982819d5a37.gif"
                }
              />
            </div>
            <div className={styles.item}>
              <img
                src={
                  "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/94932150-50f4-43c8-b916-38ca3d179c2c___b1e4c83ffc6b7c9c4755f982819d5a37.gif"
                }
              />
            </div>
          </div>
          <div className={styles.row_item_content}>
            <div className={styles.item}>
              <img
                src={
                  "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/94932150-50f4-43c8-b916-38ca3d179c2c___b1e4c83ffc6b7c9c4755f982819d5a37.gif"
                }
              />
            </div>
            <div className={styles.item}>
              <img
                src={
                  "https://carrefourbr.vtexassets.com/assets/vtex.file-manager-graphql/images/94932150-50f4-43c8-b916-38ca3d179c2c___b1e4c83ffc6b7c9c4755f982819d5a37.gif"
                }
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
