import styles from './Input.module.scss';

interface InputProps{
  label?:string;
  type?:string;
  placeholder?:string;
  name?:string;
  id?:string;
  subtext?:string;
  width?:string
  onChange?:()=>{};

}

export function Input({label='',type,placeholder,subtext='',name,id,onChange,width}:InputProps){
  return(
    <div className={styles.input_box}>
    {label != '' && <label>{label}</label> }  
      
      <input type={type} placeholder={placeholder} name={name} id={id}  onChange={onChange}/>
     {subtext !=  '' &&  <div className={styles.input_subtext}>{subtext}</div>} 
    </div>
  )
}