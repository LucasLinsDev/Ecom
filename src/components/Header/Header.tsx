import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { Cart } from './Cart/Cart';
import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import { Profile } from './Profile/Profile';
import { SearchBox } from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';
export function Header(){

  const [show,setShow]=useState(false);

  const menu=useMediaQuery({query: '(min-width: 800px)' })


  useEffect(()=>{
    {menu ? setShow(true) : setShow(false)}
  },[menu])

  return(
    <header className={styles.header}>
     
       <div className={styles.header__container}>
        <div className={styles.header__menu_icon}>
              <HiMenu size={34} color='white' className={styles.menu_icon} onClick={()=>{setShow(!show)}}/>
        </div>
          <Link to='/'>
            <Logo/>
          </Link>  
          {show   && <Navbar /> }  
            <SearchBox/>
        <div className={styles.icons}>
           <Cart/>
           <Profile/>
        </div>
       </div>
    </header>
  )
}