import styles from './Cart.module.scss';
import { HiOutlineShoppingCart } from "react-icons/hi"
import {useMediaQuery} from 'react-responsive';

interface CartProps{
  icon?:string
}

export function Cart({icon}:CartProps){

   const icons = useMediaQuery({ query: '(max-width: 800px)' })

  return(
    <div className={styles.icon_card} data-testid='card'>
      {! icons ?  <HiOutlineShoppingCart size={24}/> :  <HiOutlineShoppingCart size={24}  /> }
    </div>
  )
}