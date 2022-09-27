import styles from './Radio.module.scss';

interface RadioProps{
  label?:string;
}


export function Radio({label}:RadioProps){
  return(
    <div className={styles.radio}>
      <label>{label}</label>
      <div className={styles.radio_item}>
       <div> <input type='radio'/></div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus accusamus quisquam aperiam temporibus molestiae odit exercitationem voluptatum sequi nobis blanditiis optio quia doloribus, praesentium ipsa consectetur sint dolorem minima aliquid?</p>
      </div>
    </div>
  )
}