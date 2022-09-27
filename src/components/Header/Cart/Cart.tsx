import styles from './Cart.module.scss';
import { HiOutlineShoppingCart, HiOutlineXCircle } from "react-icons/hi"
import {useMediaQuery} from 'react-responsive';
import { MyCart } from './MyCart/MyCart';
import { useState } from 'react';

interface CartProps{
  icon?:string
}

export function Cart({icon}:CartProps){

   const icons = useMediaQuery({ query: '(max-width: 800px)' })
  const [show,setShow]=useState(false);
  return(
    <>
     <div className={styles.icon_card} data-testid='card'>
    {!show ?  <HiOutlineShoppingCart size={24} onClick={()=>setShow(!show)} /> : <HiOutlineXCircle  color='red'  size={24} onClick={()=>setShow(!show)}  /> }

    </div>
    {show && <MyCart/> }
    
    </>
  )
}