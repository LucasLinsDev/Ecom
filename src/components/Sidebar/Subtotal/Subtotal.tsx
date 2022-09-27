import { Button } from '../../Button/Button';
import styles from './Subtotal.module.scss';


export function Subtotal(){
  return(
    <div className={styles.subtotal}>
        <div className={styles.sutotalrow}>
          <p>Subtotal</p>
          <p>$13,4499</p>
        </div>
         <div className={styles.sutotalrow}>
          <p>Subtotal</p>
          <p>$13,4499</p>
        </div>
         <div className={styles.subtotal_description}>
          <p>Subtotal</p>
          <p>$13,4499</p>
        </div>
        <div className={styles.sutotalrow}>
          <p>Subtotal</p>
          <p>$13,4499</p>
        </div>
        <Button txt='Procced to Checkout'/>
    </div>
  )
}