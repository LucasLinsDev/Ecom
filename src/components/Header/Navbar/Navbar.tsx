import { menuitem } from './data';
import styles from './Navbar.module.scss';

interface NavbarProps{
  data?:{name:string,url:string}[]
}

export function Navbar({data}:NavbarProps){


  return(
    <nav className={styles.navbar} data-cy="navbar" data-testid="navbar" >
     {data ? 
          (
            <>
              {data.map((item,index)=>(
                <a  key={index} className={styles.nav_link}>{item.name}</a>
              ))}
            </>
          )
     : 
        (
         <>
          <a className={styles.navbar_link}>Laptops</a>
          <a className={styles.navbar_link}>Computador</a>
          <a className={styles.navbar_link}>Smartphones</a>
          <a className={styles.navbar_link}>Gamer</a>
          <a className={styles.navbar_link}>About</a>
          </>
        )
     }
    </nav>
  )
}