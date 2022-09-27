import styles from './Button.module.scss';

interface ButtonProps{
  txt?:string;
}

export function Button({txt}:ButtonProps){
  return(
    <div>
      <button className={styles.button}>
        {txt}
      </button>
    </div>
  )
}