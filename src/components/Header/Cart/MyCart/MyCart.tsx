import styles from './MyCart.module.scss';
import product from '../../../../resource/products/computador.png'
import { HiOutlineXCircle } from 'react-icons/hi';
export function MyCart(){
  return(
    <div className={styles.my_card}>

        <div className={styles.card_header}>
          <h1>My Cart</h1>
          <span>2 items in cart</span>
          <button>View or Edit Your Cart</button>
        </div>

        <div className={styles.cart_item}>
            <span>1x</span>
            <div className={styles.cart_image}>
              <img src={product}/>
            </div>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
             <div>
          <HiOutlineXCircle size={16}/>
          <HiOutlineXCircle size={16}/>
        </div>
        </div>
         <div className={styles.cart_item}>
            <span>1x</span>
            <div className={styles.cart_image}>
              <img src={product}/>
            </div>
            <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
             <div>
          <HiOutlineXCircle size={16}/>
          <HiOutlineXCircle size={16}/>
        </div>
        </div>
       

        <div className={styles.cart_subtotal}>
          <h1><span>Subtotal:</span>$499.99</h1>
          <button>Go to Checkout</button>
        </div>

    </div>
  )
}