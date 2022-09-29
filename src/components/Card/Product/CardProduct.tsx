import styles from './CardProduct.module.scss';


interface CardProductProps{
  image?:string;
  title?:string;
  price?:string | number;
  star?:number;
  button?:boolean
}


export function CartProduct({image,title,price,star,button}:CardProductProps){
  return(
    <div className={styles.card}>
      <div className={styles.star}>

      </div>
      <div className={styles.image}>
        <img src={image}/>
      </div>
      <p className={styles.title}> {title?.toUpperCase().slice(0,36).toString()} ...</p>
      <p className={styles.price}>$ {price}</p>
      <p>À VISTA NO PIX</p>
      {button &&  <button className={styles.button}>ADD TO CARD</button>}
    </div>
  )
}