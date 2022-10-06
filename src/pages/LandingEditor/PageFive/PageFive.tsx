import { BG } from "../../../components/BG/BG";
import { Box } from "../../../components/Box/Box";
import { Layout } from "../../../components/Layout/Layout";
import { Row } from "../../../components/Row/Row";
import { SizedBox } from "../../../components/SizedBox/SizedBox";

import styles from "./PageFive.module.scss";

export function PageFive() {
  return (
    <Layout>
      <Row>
        <div className={styles.banner}>
          <img
            src={
              "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/09-set/galaxy/img/btv-2.png"
            }
          />
        </div>
      </Row>
      <div className={styles.title}>
        <h1>SMARTPHONES</h1>
      </div>
      <Row responsive>
        {[1, 2, 3, 4].map(() => (
          <Box>
            <div className={styles.product}>
              <img
                src={
                  "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/09-set/galaxy/img/z.png"
                }
              />
              <h1>Galazy Z</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi nemo dolore nulla
              </p>
            </div>
          </Box>
        ))}
      </Row>
      <SizedBox height={46} />

      <Row responsive>
        <BG color="silgrver">
          <SizedBox height={46} />
          <Row responsive>
            {[1, 2].map(() => (
              <Box>
                <div className={styles.product}>
                  <img
                    src={
                      "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/09-set/galaxy/img/tab-s.png"
                    }
                  />
                </div>
              </Box>
            ))}
          </Row>
          <SizedBox height={46} />
        </BG>
      </Row>

      <div className={styles.title}>
        <h1>SMARTPHONES</h1>
      </div>
      <Row responsive>
        {[1, 2, 3].map(() => (
          <Box>
            <div className={styles.product}>
              <img
                src={
                  "https://www.pontofrio-imagens.com.br/criacao/03-hotsite/2021/09-set/galaxy/img/watch.png"
                }
              />
            </div>
          </Box>
        ))}
      </Row>
    </Layout>
  );
}
