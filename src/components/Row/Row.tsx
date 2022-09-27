import { ReactElement, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Row.module.scss';

interface RowProps{
  children?:ReactElement | ReactElement[]
  responsive?:boolean
  reverse?:boolean
  gap?:number

}

export function Row({children,responsive,reverse,gap}:RowProps){


  return (
    <div className={` ${styles.row} ${responsive ? styles.responsive_row : ''} ${gap ? styles.gap : ''} ${reverse ? styles.reverse_row : ''} `}>
        {children}
    </div>
  )
}