import styles from './Support.module.scss';
import support from '../../../resource/products/faq.png'
export function Support(){
  return(
    <div className={styles.support}>
      <div className={styles.support_content}>
         {[1,2,3].map((index)=>(
          <>
            <div className={styles.support_item}>
            <p>Product Support</p>
            </div>
            <div className={styles.content_item}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti excepturi, dolorem ad blanditiis sed laudantium delectus esse soluta! Tenetur dolorum placeat autem iure totam corrupti sapiente ducimus, libero facere.</p>
            </div>
            </>
         ))}
      </div>
      <div className={styles.support_image}>
        <img src={support} alt=""/>
      </div>
    </div>
  )
}