import styles from './SearchBox.module.scss';
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){
  return(
    <div className={styles.searchbox} data-cy='search-box' data-testid='search-box'>
      <input type='text' data-cy='input' placeholder={'Search...'}/>
      <button data-cy='button' ><RiSearchLine size={24} data-testid='search_icone' /></button>
    </div>
  )
}