import { Cart } from '../../components/Header/Cart/Cart';
import { Logo } from '../../components/Header/Logo/Logo';
import { Navbar } from '../../components/Header/Navbar/Navbar';
import { Profile } from '../../components/Header/Profile/Profile';
import { SearchBox } from '../../components/Header/SearchBox/SearchBox';
import styles from './PageComponents.module.scss';

export function PageComponents(){
  return(
    <div className={styles.page}>
      <Logo/>
      <Navbar/>
      <SearchBox/>
      <Cart/>
      <Profile/>
    </div>
  )
}