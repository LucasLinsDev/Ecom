import { Box } from '../../components/Box/Box';
import { Layout } from '../../components/Layout/Layout';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Row } from '../../components/Row/Row';
import { AboutSidebar } from '../../components/Sidebar/AboutSidebar/About';
import styles from './About.module.scss';

export function About(){
  return (
    <Layout>
      <Row responsive>
        <Box flex={2}>
          <PageHeader title='Shop Terms & Conditions' location='Home > Terms'/>
          <article className={styles.article}>
              <h1>GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h1>
              <h2>Definitions & Interpretation</h2>
              <p>In the following Terms and Conditions of sale, unless the context requires otherwise (a) "Shop" means Shop Pty Ltd ABN 11 222 333 444; (b) "Customer" means the person or corporation placing an order for the purchase of goods or services from Shop; (c) "Products" means any goods, materials, equipment or services provided to the Customer by Shop; (d) if the Customer comprises more than one person, each of those person’s liability is joint and several; (e) references to a party or a person includes any form of entity and their respective successors, assigns and representatives; (f) for all periods and times specified in clauses 5 and 11, time is of the essence; and (g) all references to currency are references to Australian dollars. </p>
          </article>
        </Box>
        <Box flex={1}><AboutSidebar/></Box>
      </Row>
    </Layout>
  )
}