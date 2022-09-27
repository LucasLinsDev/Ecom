import styles from './Select.module.scss';

interface SelectProps{
  name?:string;
  option?:any
}

export function Select({name,option}:SelectProps){
  return (
    <select name='' className={styles.select}>
      <option value="">{option}</option>
    </select>
  )
}