import styles from './Form.module.scss';

export function Form(){
  return(
    <div className={styles.form_footer}>
              <input type='text' placeholder='Your Email'/>
              <button>Subscribe</button>
    </div>
  )
}