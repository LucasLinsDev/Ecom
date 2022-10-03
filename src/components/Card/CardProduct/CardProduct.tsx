import { HiStar } from "react-icons/hi";
import styles from "./CardProduct.module.scss";
import product from "../../../resource/products/productcart.png";
export function CardProduct() {
  return (
    <div className={styles.card_product}>
      <div className={styles.card_image}>
        <img src={product} />
      </div>
      <div className={styles.card_content}>
        <h1>Apollo Running Short</h1>
        <p>$50.00</p>
        <div className={styles.card_star}>
          {[1, 2, 3, 4, 5].map(() => (
            <HiStar size={18} color="#5ECE7B" />
          ))}
          <span>(8)</span>
        </div>
      </div>
    </div>
  );
}
