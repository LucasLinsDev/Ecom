import styles from './Aside.module.scss';
const AsideAdmin = () =>{
  return(
    <div className={styles.aside}>
        <h1>My Account</h1>
        <div className={styles.item}>
          <ul>
            <li>Personal Details</li>
            <li>My Profile</li>
            <li>Shipping details</li>
          </ul>
        </div>
         <div className={styles.item}>
          <ul>
            <li>Order details</li>
            <li>Order History</li>
            <li>Logout</li>
          </ul>
        </div>
    </div>
  )
}

export default AsideAdmin;