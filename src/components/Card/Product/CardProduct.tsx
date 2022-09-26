import styles from './CardProduct.module.scss';


interface CardProductProps{
  image?:string;
  title?:string;
  price?:string;
  star?:number;
}


export function CartProduct({image,title,price,star}:CardProductProps){
  return(
    <div className={styles.card}>
      <div className={styles.star}>

      </div>
      <div className={styles.image}>
        <img src={image}/>
      </div>
      <p className={styles.title}> {title?.toUpperCase()}</p>
      <p className={styles.price}>$ {price}</p>
      <p>À VISTA NO PIX</p>
    </div>
  )
}