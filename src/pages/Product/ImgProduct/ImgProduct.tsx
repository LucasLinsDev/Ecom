import styles from './ImgProduct.module.scss';

import products from '../../../resource/products/computador.png'
import hearth from '../../../resource/products/hearth.png'

export function ImgProduct(){
  return(
    <div className={styles.product_content}>
        <div className={styles.product_icones}>
          {[1,2,3].map((index)=>(
             <img src={hearth}/>
          ))}
        </div>
        <img src={products} alt=''/>
    </div>
  )
}