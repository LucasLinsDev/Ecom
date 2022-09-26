import styles from './Banner.module.scss';
import banner  from '../../../resource/banner/banner_catalog.png'

interface BannerProps{
  img?:string;
  alt?:string;
}

export function Banner({img=banner,alt}:BannerProps){
  return(
    <div className={styles.banner_products}>
      <img src={img} alt={alt}/>
    </div>
  )
}