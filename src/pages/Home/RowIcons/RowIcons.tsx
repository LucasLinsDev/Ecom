import { CardIcons } from '../../../components/Card/CardIcons/CardIcons';
import styles from './RowIcons.module.scss';
import icone_fone from '../../../resource/img/icone_fone.png';
export function RowIcons(){
  return(
    <div className={styles.row_icons}>
        {[1,2,3].map((index)=>(
          <CardIcons key={index} icone={icone_fone} alt='fone'/>
        ))}
    </div>
  )
}