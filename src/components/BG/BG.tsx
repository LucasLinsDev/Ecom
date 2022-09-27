import { ReactNode } from 'react';
import styles from './BG.module.scss';

interface BGProps{
  children?:ReactNode;
  color?:string
}

export function BG({children,color}:BGProps){
  return(
    <div className={styles.bg} style={{backgroundColor:color}}>
      {children}
    </div>
  )
}