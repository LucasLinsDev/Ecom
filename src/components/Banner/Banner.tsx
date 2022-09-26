import styles from './Banner.module.scss';

import banner_lateral from '../../resource/banner/banner_lateral.png'

interface BannerProps{
  banner?:string,
  title?:string,
  link?:string
  alt?:string,
}

export function Banner({banner=banner_lateral,alt='default'}:BannerProps){
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
          <img src={banner} alt={alt}/>
      </div>
      <div className={styles.content}>
        <h1>Desktops</h1>
        <a>See All Products</a>
      </div>
    </div>
  )
}