import styles from './Banner.module.scss';
import banner from '../../../resource/banner/banner_lateral.png';
export function BannerLeft(){
  return(
    <img src={banner} className={styles.banner_aside}/>
  )
}