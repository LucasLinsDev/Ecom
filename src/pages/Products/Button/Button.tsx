import { useState } from 'react';
import styles from './Button.module.scss';

interface ButtonSearchProps{
  title?:string;
}

export function ButtonSearch({title}:ButtonSearchProps){

  const [active,setActive]=useState(false);

    return(
      <div className={`${styles.buttonSearch} `}>
        {[1,2,3,4].map(()=>(
          <div className={`${styles.button_content} ${active ? styles.active : ''} `}>{title}</div>
        ))}
      </div>
    )
}