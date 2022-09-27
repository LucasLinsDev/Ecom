import { Box } from '../../components/Box/Box';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Form/Input/Input';
import { TextArea } from '../../components/Form/TextArea/TextArea';
import { Layout } from '../../components/Layout/Layout';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Row } from '../../components/Row/Row';
import { Infos } from '../../components/Sidebar/Infos/Infos';
import styles from './Contact.module.scss';

export function Contact(){
  return(
    <Layout>
      <Row responsive>
        <Box flex={2}>
           <PageHeader title='Contact Us' content={`We love hearing from you, our Shop customers.  Please contact us and we will make sure to get back to you as soon as we possibly can.`} />
            <div className={styles.form_contact}>
              <Row>
                <Box>
                  <Input/>
                </Box>
                <Box>
                  <Input/>
                </Box>         
              </Row>
              <Input />
              <TextArea/>
              <Button txt='SUBMIT'/>
            </div>
        </Box>
        <Box flex={1}>
          <Infos/>
        </Box>
      </Row>
    </Layout>
  )
}