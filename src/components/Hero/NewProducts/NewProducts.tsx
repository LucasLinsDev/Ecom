import { SwiperProducts } from '../SwiperProducts/SwiperProducts';
import styles from './NewProducts.module.scss';

export function NewProducts(){
  return(
    <section className={styles.new_products}>
      <div className={styles.header}>
        <h1>New Products</h1> <a href="#">See All New Products</a>
      </div>
      <SwiperProducts/>
    </section>
  )
}