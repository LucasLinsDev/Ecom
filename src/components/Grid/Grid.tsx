import { ReactElement } from 'react';
import styles from './Grid.module.scss';

interface GridProps{
  children?:ReactElement | ReactElement[]
}


export function Grid({children}:GridProps){
  return(
    <div className={styles.grid}>
      {children}
    </div>
  )
}