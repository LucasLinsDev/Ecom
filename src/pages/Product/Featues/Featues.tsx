import styles from './Featues.module.scss';
import icone from '../../../resource/products/icone_product.png';
export function Featues(){
  return(
      <div className={styles.featues_container}>
        <div className={styles.featues}>
          <div className={styles.featues_item}>
            <h2>Featues</h2>
            <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
          </div>
        </div>
        <div className={styles.featues_grid}>
        {[,1,2,3,4].map((index)=>(
          <div className={styles.featues_item}>
            <img src={icone}/>
           
            <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
          </div>
        ))}
        </div>
      </div>
  )
}