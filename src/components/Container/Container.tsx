import { ReactElement } from 'react';
import styles from './Container.module.scss';

interface PropsContainer{
  children:ReactElement | ReactElement[]
  display?:string;
  gap?:number
  width?:number
  paddingVertical?:number
}

export function Container({children,display,gap,width,paddingVertical}:PropsContainer){
  return(
    <div className={styles.container} style={{display:display,gap:gap,maxWidth:width,paddingTop:paddingVertical,paddingBottom:paddingVertical}}>
        {children}
    </div>
  )
}