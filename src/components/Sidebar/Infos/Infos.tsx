import styles from './Infos.module.scss';
import location from '../../../resource/img/location.svg';

export function Infos(){
  return(
       <div className={styles.infos_contact}>
            {[1,2,3,4].map(()=>(
              <div className={styles.info_contact_item}>
                <img src={location}/>
                <div className={styles.info_contact_item_content}>
                  <h2>Address:</h2>
                  <p>1234 Street Adress City Address, 1234</p>
                </div>
            </div>
            ))}
      </div>
  )
}