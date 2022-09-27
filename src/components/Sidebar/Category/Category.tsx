import styles from './Category.module.scss';

interface CategoryProps{
  title?:string;
  data?:any
}

const data=[
  {name:'CUSTOM PCS',quantity:1},
  {name:'MSI ALL-IN-ONE-PCS',quantity:2},
  {name:'HP/COMPAQ PCS',quantity:3},
  {name:'CUSTOM PCS',quantity:4}
]

export function Category({title='Category'}:CategoryProps){
  return(
    <div className={styles.category}>
      <div className={styles.category_header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.category_content}>
          <ul>
            {data.map((item,index)=>(
              <li>{item.name}</li>
            ))}
          </ul>
      </div>

    </div>
  )
}