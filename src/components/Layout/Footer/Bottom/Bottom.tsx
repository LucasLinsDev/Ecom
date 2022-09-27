import styles from './Bottom.module.scss';

import facebook from '../../../../resource/img/facebook.png'
import card from '../../../../resource/img/card.png'

export function Bottom(){
  return(
    <>
      <div className={styles.social}>
        {[1,2,3,4,5,6].map((index)=>(
          <img src={facebook} key={index} />
        ))}
      </div>
      
      <div className={styles.card}>
        {[1,2,3,4,5,6].map((index)=>(
          <img src={card} key={index} />
        ))}
      </div>

      <div className={styles.infosite}>
          <p>Copyright 2022</p>
      </div>
    </>
  )
}