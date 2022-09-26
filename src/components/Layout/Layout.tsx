import { Footer } from './Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';


interface Layout{
  children:React.ReactNode;
}

export function Layout({children}:Layout){
  return (
    <div className={styles.layout}>
        <Header/>
      <div className={styles.layout__center}>
        {children}
      </div>
        <Footer/>
    </div>
  )
}