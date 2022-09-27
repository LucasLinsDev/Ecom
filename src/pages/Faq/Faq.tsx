import { BG } from '../../components/BG/BG';
import { Box } from '../../components/Box/Box';
import { Container } from '../../components/Container/Container';
import { Layout } from '../../components/Layout/Layout';
import styles from './Faq.module.scss';
import blog from '../../resource/products/blog.png';
import { Row } from '../../components/Row/Row';
import { SizedBox } from '../../components/SizedBox/SizedBox';
export function Faq(){
  return(
    <Layout max>
      <BG color='black'>
        <SizedBox height={30}/>
        <Container width={1440}>
          <Row responsive reverse>
            <Box flex={1}>
            <div className={styles.faq_content}>
                <h1>A Family That Keeps On Growing</h1>
                <p>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.

Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
            </div>
          </Box>
          <Box flex={1}>
            <div className={styles.faq_image}>
                <img src={blog} alt=""/>
            </div>
          </Box>
          </Row>
        </Container>
         <SizedBox height={30}/>
      </BG>
       <Container width={1440}>
        <SizedBox height={30}/>
          <Row responsive>
            <Box flex={1}>
               <div className={styles.faq_image}>
                <img src={blog} alt=""/>
            </div>
           
          </Box>
          <Box flex={1}>
            <div className={styles.faq_content_right}>
                <h1>A Family That Keeps On Growing</h1>
                <p>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.

Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
            </div>
          </Box>
          </Row>
           <SizedBox height={30}/>
        </Container>
    </Layout>
  )
}