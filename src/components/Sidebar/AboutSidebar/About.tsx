import styles from './About.module.scss';

export function AboutSidebar(){
  return(
     <div className={styles.aside_container_list}>
      <h4>Definitions & Interpretation</h4>
      <ul>
        <li>General</li>
        <li>Quotations</li>
        <li>Prices / Taxes</li>
        <li>Terms of Payment</li>
        <li>Credit Accounts</li>
        <li>Change of Ownership</li>
        <li>General</li>
        <li>Change of Ownership</li>
        <li>Information on the Products supplied</li>
        <li>Delivery</li>
      </ul>
    </div>
  )
}