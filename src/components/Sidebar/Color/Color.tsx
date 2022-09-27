import styles from './Color.module.scss';

export function Color(){
  return(
    <div className={styles.box_color}>
        <div className={styles.box_header}>
          <h2>Color</h2>
        </div>
        <div className={styles.box_content}>
          <input type='radio'/>
          <input type='radio'/>
          <input type='radio'/>
        </div>
    </div>
  )
}