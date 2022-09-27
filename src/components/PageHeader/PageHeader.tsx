import { locationpage, titlepage } from './data';
import styles from './PageHeader.module.scss';

interface PropsPageHeader{
  location?:string;
  title?:string;
  button?:boolean;
  
}

export function PageHeader({location=locationpage,title=titlepage,button}:PropsPageHeader){

 
  return(
      <div className={styles.page_header}>
        <p>{location}</p>
        <div className={styles.page_content}>
           <h1>{title}</h1> {button && <button>Sign In</button>}
        </div>
      </div>
  )
}