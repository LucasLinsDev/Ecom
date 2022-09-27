
import { Layout } from '../../../components/Layout/Layout';
import { Row } from '../../../components/Row/Row';
import AsideAdmin from '../Aside/Aside'
import styles from './Shipping.module.scss';

const ShippingDetails = () =>{
  return(
   
    <Layout>
       <Row  responsive gap={26}>
         <AsideAdmin/>
         <div className={styles.right}>
           <div className={styles.shipping_header}>
            <h1>Shipping details</h1>
            <p>Manage all the shipping addresses you want (work place, home address ...) This way you won't have to enter the shipping address manually with each order.</p>
          </div>
          {[1,2,3,4].map(()=>(
            <div className={styles.order}>
            <div className={styles.orderitem_left}>
                <p>John Dohe</p>
                <p>South 23 rd East Street</p>
                <p>84109 Salt Lake County</p>
                <p>United States</p>
            </div>
            <div className={styles.orderitem_right}>
                <button className={styles.button_change}>CHANGE</button>
                <button className={styles.button_delete}>DELETE</button>
            </div>
          </div>
          ))}
         </div>
       </Row>
    </Layout>
   
  )
}

export default ShippingDetails