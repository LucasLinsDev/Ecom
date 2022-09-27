import styles from './OrderBox.module.scss';
import produto from '../../../resource/products/computador.png';
export function OrderBox(){
  return(
    <div className={styles.order_container}>
      <div className={styles.order_header}>
        <h2>Order Summary</h2>
   
    
      </div>
      <div className={styles.order_content}>
        {[1,2].map(()=>(
          <div className={styles.order_item}>
          <img src={produto} />
          <div className={styles.order_item_content}>
            <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...</p>
           
            <span>$3,799.00</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}