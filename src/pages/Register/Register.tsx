import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Form/Input/Input';
import { Layout } from '../../components/Layout/Layout';
import styles from './Register.module.scss';

export function Register(){
  return (
    <Layout>
        <div className={styles.register}>
        <div className={styles.register_left}>
          <div className={styles.register_header}>
            <h2>Register Customers</h2>
           <p>If you have an account, sign in with your email address.</p>
            <Input placeholder='' type='text' />
            <Input/>
            <Button txt='Register'/>
          </div>
        </div>
        <div className={styles.rigister_right}>
            <h1>New Customer?</h1>
            <p>Creating an account has many benefits: </p>
            <ul>
              <li>Check out faster</li>
              <li> Keep more tha n one address</li>
              <li>Track orders and more</li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}