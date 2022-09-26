import styles from './Menu.module.scss';

export function Menu (){
  return(
    <div className={styles.footer_menu}>
      <div className={styles.menu}>
        <div className={styles.menushow}>
          <p>Laptops</p>
        </div>
         <ul>
                  <li>About Us</li>
                  <li>About Zip</li>
                  <li>Privacy Policy</li>
                  <li>Search</li>
                  <li>Terms</li>
                  <li>Order and Returns</li>
                  <li>Terms</li>
                  <li>Contact Us</li>
                  <li>Advanced Search</li>
                  <li>Newsletter Subscription</li>
          </ul>
      </div>
    </div>
  )
}