import { Button } from '../../Button/Button';
import { Input } from '../../Form/Input/Input';
import { Radio } from '../../Form/Radio/Radio';
import { Select } from '../../Form/Select/Select';

import styles from './Summary.module.scss';

export function Summary(){
  return(
    <div className={styles.summary}>
      <h2>Summary</h2>
      <p>Lorem ipssum dolor</p>
      <Select option={'Lorem'} />
      <Input label='Country' />
      <Input label='State/Province' />
      <Radio label='Stadard Rate'/>
      <Input label='Enter your discount'/>
      <Button txt='Apply discount'/>
    </div>
  )
}