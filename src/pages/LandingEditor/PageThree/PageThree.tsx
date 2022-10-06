import { Box } from "../../../components/Box/Box";
import { Row } from "../../../components/Row/Row";

import styles from "./PageThre.module.scss";
import ps5 from "../../../resource/banner/ps5.webp";
import ps6 from "../../../resource/banner/ps6.webp";
import ps4 from "../../../resource/banner/ps4.webp";
import { Layout } from "../../../components/Layout/Layout";
import { SizedBox } from "../../../components/SizedBox/SizedBox";
export function PageThree() {
  return (
    <Layout>
      <Row>
        <Box>
          <div className={styles.image}>
            <img src={ps5} />
          </div>
        </Box>
        <Box>
          <div className={styles.image}>
            <img src={ps5} />
          </div>
        </Box>
      </Row>
      <SizedBox height={36} />
      <Row responsive>
        <Box>
          <div className={styles.image}>
            <img src={ps4} />
          </div>
        </Box>
        <Box>
          <div className={styles.image}>
            <img src={ps4} />
          </div>
        </Box>
      </Row>
      <SizedBox height={36} />
      <Row>
        <Box>
          <div className={styles.image}>
            <img src={ps6} />
          </div>
        </Box>
      </Row>
      <SizedBox height={36} />
      <Row responsive>
        <Box>
          <div className={styles.image}>
            <img src={ps4} />
          </div>
        </Box>
        <Box>
          <div className={styles.image}>
            <img src={ps4} />
          </div>
        </Box>
      </Row>
    </Layout>
  );
}
