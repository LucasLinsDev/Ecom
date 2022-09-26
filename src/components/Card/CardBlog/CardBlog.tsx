import styles from './CardBlog.module.scss';
import blog from '../../../resource/blog/01.png';

interface PropsBlog{
  img?:string;
  alt?:string;
}


export function CardBlog({img=blog,alt}:PropsBlog){
  return(
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={blog} alt={alt}/>
      </div>
      <p>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
         <span>01.09.2020</span>
    </div>
  )
}