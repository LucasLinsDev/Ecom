import { Box } from '../../../components/Box/Box';
import { Layout } from '../../../components/Layout/Layout';
import { Row } from '../../../components/Row/Row';
import { SizedBox } from '../../../components/SizedBox/SizedBox';
import AsideAdmin from '../Aside/Aside';
import styles from './Account.module.scss';

export function Account(){
  return(
    <Layout>
      <SizedBox height={60}/>
      <Row responsive reverse>
          <Box flex={1}>
          <AsideAdmin/>
      </Box>
      <Box flex={2}>
      <div className={styles.myaccount}>
     {/*
       <div className={styles.myaccount_header}>
          <div className={styles.myaccount_button}>
             <button>Personal data</button>
             <button>Password change</button>
          </div>
          <span>Feel free to edit any of your details below so your account is always up to date</span>
        </div>
    */
    }
        <form className={styles.form}>
          <div className={styles.forms}>
            <div className={styles.form_left}>
               <input type='text' placeholder='First Name'/>
            </div>
            <div className={styles.form_right}>
               <input type='text' placeholder='Last Name'/>
            </div>
           
          </div>
           <input type='text' placeholder='Your e-mail'/>
            <button>UPDATE PERSONAL DATA</button>
            <p>At Brand name, we attach great importance to privacy issues and are committed to protecting the personal data of our users. Learn more about how we care and use your personal data in the Privacy Policy.</p>
        </form>
      </div>
      </Box>
      </Row>
  <SizedBox height={60}/>
    </Layout>
  )
}