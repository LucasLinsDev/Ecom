import { HiOutlineMenu, HiViewGrid } from 'react-icons/hi';
import styles from './Search.module.scss';

export function SearchBox(){
  return(
      <div className={styles.search_box}>
          <span>Items 1-35 of 61</span>         
          {[1,2].map((index)=>(
            <div className={styles.select_box} key={index}>
              <select name="position">
                <option value=''>Lorem Ipsum</option>
                <option value=''>Lorem Ipsum</option>
                <option value=''>Lorem Ipsum</option>
                <option value=''>Lorem Ipsum</option>
                <option value=''>Lorem Ipsum</option>
              </select>
          </div>
          ))}
          <div className={styles.icone}>
                <HiOutlineMenu size={24}/>
          </div>
          <div className={styles.icone}>
                <HiViewGrid size={24}/>
          </div>
        
          
      </div>
  )
}