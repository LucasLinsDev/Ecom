import { Footer } from './Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';


interface Layout{
  children:React.ReactNode;
  max?:boolean
}

export function Layout({children,max}:Layout){
  return (
    <div className={styles.layout}>
        <Header/>
        {max ? (
        <div className={styles.layout_max}>
          {children}
        </div>
        ) : (
        <div className={styles.layout__center}>
          {children}
        </div>
        )}
        <Footer/>
    </div>
  )
}