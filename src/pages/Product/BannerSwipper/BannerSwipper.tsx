import { Box } from '../../../components/Box/Box';
import { Container } from '../../../components/Container/Container';
import { Row } from '../../../components/Row/Row';
import styles from './BannerSwipper.module.scss';
import processador from '../../../resource/products/processador.png';
import { BG } from '../../../components/BG/BG';
export function BannerSwipper(){
  return(
    <BG color='black'>
      <Container width={1440}>
    
          <div className={styles.banner_container}>
              <div className={styles.banner_content}>
              <h2>Outplay the Competittion</h2>
              <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
  *Performance compared to i7-9700. Specs varies by model.</p>
            </div>

            <div className={styles.banner_image}>
              <img src={processador} />  
            </div>       
          </div>
    
    </Container>

    </BG>
 
  )
}