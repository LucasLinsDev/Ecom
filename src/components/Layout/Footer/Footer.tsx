import { Bottom } from './Bottom/Bottom';
import styles from './Footer.module.scss';
import { Form } from './Form/Form';
import { Menu } from './Menu/Menu';

export function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.footer_container}>  
        <div className={styles.footer_header}>
          <div className={styles.box_left}>
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers</p>
          </div>
          <div className={styles.box_right}>
            <Form/>
          </div>
        </div>

        <div className={styles.footer_center}>
           {[1,2,3,4].map((index)=>(
             <Menu key={index} />
           ))}
        </div>

        <div className={styles.footer_bottom}>
          <Bottom/>
        </div>

      </div>
    </div>
  )
}