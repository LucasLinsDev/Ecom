import { CardBlog } from '../../../components/Card/CardBlog/CardBlog';
import styles from './RowBlog.module.scss';

export function RowBlog(){
  return(
    <div className={styles.rowBlog}>
     {[1,2,3,4,5,6,7,8,9,10,11,12].map((index)=>(
       <CardBlog key={index} />
     ))}
    </div>
  )
}