import styles from './Description.module.scss';

export function Description(){
  return(
    <div className={styles.description}>
      <h1>MSI MPG Trident 3</h1>
      <span>Be the first to review this product</span>
      <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
      <div className={styles.description_colors}>
        <input type='radio'/>
        <input type='radio'/>
        <input type='radio'/>
      </div>
    </div>
  )
}