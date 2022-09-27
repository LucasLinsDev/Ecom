import { ReactElement, ReactNode } from 'react';
import styles from './Box.module.scss';

interface BoxProps{
  children?:ReactElement | ReactElement[] | ReactNode
  width?:number
  responsive?:boolean
  flex?:number
}

export function Box({children,width,responsive,flex}:BoxProps){
  return(
    <div className={styles.box} style={{maxWidth:width ,flex:flex }}> {children}</div>
  )
}