import styles from './Companies.module.scss';
import logo_companie from '../../../resource/img/01.png';




export function Companies(){
  return (
      <div className={styles.container_companie}>
         {[1,2,3,4,5,6,7].map((index)=> (
          <div className={styles.companie} key={index}>
              <img src={logo_companie} alt=""/>
          </div>
        ))}
      </div>
  )
}