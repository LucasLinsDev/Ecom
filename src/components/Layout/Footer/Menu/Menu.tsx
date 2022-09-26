import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Menu.module.scss';

import { HiChevronUp, HiOutlineChevronDown } from 'react-icons/hi';
export function Menu (){
 const [show,setShow]=useState(false);

  const menu=useMediaQuery({query: '(min-width: 800px)' })
  

  useEffect(()=>{
    {menu ? setShow(true) : setShow(false)}
  },[menu])

  const handlerShow = ()=>{
  
    if(menu === false){
         setShow(!show);
    }
   
  }

  return(
    <div className={styles.footer_menu}>
      <div className={styles.menu}>
        <div className={styles.menushow} onClick={handlerShow}>
          <p>Laptops</p> {!menu && (
            !show ? <HiOutlineChevronDown size={24} color='white'/> : <HiChevronUp size={24} color='white'/>
          )}
        </div>
        {show && (
             <ul>
                  <li>About Us</li>
                  <li>About Zip</li>
                  <li>Privacy Policy</li>
                  <li>Search</li>
                  <li>Terms</li>
                  <li>Order and Returns</li>
                  <li>Terms</li>
                  <li>Contact Us</li>
                  <li>Advanced Search</li>
                  <li>Newsletter Subscription</li>
          </ul>
        )}
      </div>
    </div>
  )
}