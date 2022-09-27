import { Box } from '../../components/Box/Box';
import { Layout } from '../../components/Layout/Layout';
import { Row } from '../../components/Row/Row';
import styles from './Cart.module.scss';
import product from '../../resource/img/ps5.png';
import { HiHeart } from 'react-icons/hi';
import { Summary } from '../../components/Sidebar/Summary/Summary';

export function Cart(){
  return(
    <Layout>
      <Row responsive>
        <Box flex={2}>
          <div className={styles.cart}>
              
              
              <div className={styles.cart_header}>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
              </div>
              {[1,2,3,4,5].map((index)=>(
                
              <div className={styles.cart_row}>
                <div className={styles.box_product}>
                    <img src={product} alt=''/>
                    <p>Console Sony Playstation 5 + Horizon Forbidden West Sony (5) </p>
                </div>
              <div className={styles.box_right}>
                  <div className={styles.box_price}><p>$4,349.00</p></div>
                  <div className={styles.box_quantity}><input type='number' min='1' value='1' /> </div>
                  <div className={styles.box_subtotal}><p>$13,047.00</p></div>
                  <div className={styles.box_icons}><HiHeart size={24}/></div>
              </div>
              </div>

              ))}
          </div>
          </Box>
        <Box flex={1}>
          <Summary/>
        </Box>
      </Row>
    </Layout>
  )
}