import styles from './CardIcons.module.scss';

interface CardIconsProps{
  icone:string;
  alt:string;
}

export function CardIcons({icone,alt}:CardIconsProps){
  return(
    <div className={styles.card}>
      <div className={styles.content}>
          <img src={icone} alt={alt}/>
          <h3>Product Support</h3>
          <p>Up to 3 years on-site warranty available for your peace of mind.</p>
      </div>
    </div>
  )
}