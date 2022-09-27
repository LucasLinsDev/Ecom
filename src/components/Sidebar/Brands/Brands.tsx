import styles from './Brands.module.scss';
import brands from '../../../resource/img/01.png';
export function Brands(){
  return(
    <>
    <h2 className={styles.brands_title}>BRANDS</h2>
    <div className={styles.brands}>
      {[1,2,3,4,5,6].map((index)=>(
         <img src={brands}/>
      ))}
    </div>
    </>
    
  )
}