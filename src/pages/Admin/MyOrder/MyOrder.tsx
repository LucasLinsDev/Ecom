import styles from './MyOrder.module.scss';
import product from '../../../resource/products/prod.png'

import { HiArrowNarrowLeft } from "react-icons/hi";
import AsideAdmin from '../Aside/Aside';
import { Layout } from '../../../components/Layout/Layout';
const MyOrders = () =>{
  return(
   <Layout>
     <div className={styles.myorders}>
      <AsideAdmin/>
      <div className={styles.myorders_container}>
          <div className={styles.my_orders_header}>
            <h1>My Orders</h1>
            <div className={styles.my_orders_header_content}>
              <HiArrowNarrowLeft size={24}/> <h2>Order #102667</h2> <button>Aproved</button>
            </div>
          </div>
          {
            [1,2,3,4,5].map(()=>(
               <div className={styles.myorders_item}>
            <div className={styles.myorder_left}>
                <img src={product}/>
            </div>
            <div className={styles.myorder_right}>
                <h1>Cotton Sweater</h1>
                <p className={styles.color_red}>$100.00 <span>$50.00</span></p>
                <p>Size: <span>XS</span></p>
                <p>Color: <span>white</span></p>
                <button>Cancel</button>
            </div>
          </div>
            ))
          }
          <div className={styles.myorders_informations}>
           <ul>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
           </ul>
             <ul>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
            <li>Pickup Location</li>
           </ul>
           <div className={styles.block_buttons}>
            <button>Button</button>
            <button>Button</button>
           </div>
          </div>
      </div>
    </div>
   </Layout>
  )
}

export default MyOrders