import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Input } from '../../components/Form/Input/Input';
import { Radio } from '../../components/Form/Radio/Radio';
import { Layout } from '../../components/Layout/Layout';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Row } from '../../components/Row/Row';
import { OrderBox } from '../../components/Sidebar/OrderBox/OrderBox';
import { Summary } from '../../components/Sidebar/Summary/Summary';
import styles from './Order.module.scss';

export function Order(){
  return(
      <Layout>
      
          <Row responsive>
            <Box flex={2}>
              <PageHeader title='Checkout' button/>
              <div className={styles.order_header}>
                <h2>Shipping Address</h2>
                <hr/>
              </div>
             <div className={styles.order_inputs}>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  subtext='You can create an account after checkout'/>
              <Input label='Email address'  />
              <Radio label='Price may vary dependint on the iten/ destinaiton.Shop Staff will contact you'/>
              <Radio label='Price may vary dependint on the iten/ destinaiton.Shop Staff will contact you'/>
              <Button txt='Next'/>
             </div>
            </Box>
            <Box flex={1}>
              <OrderBox/>
              <Summary/>
            </Box>
          </Row>
      
      </Layout>
  )
}