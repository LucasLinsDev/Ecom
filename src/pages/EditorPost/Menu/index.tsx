import { HiSearch } from "react-icons/hi";
import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <div className={styles.menu_container}>
      <div className={styles.box_title}>
        <h1>Hola Jorge</h1>
        <p>Buscar un restaurante</p>
        <div className={styles.menu_search}>
          <HiSearch size={26} />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>

      <div className={styles.menu_list}>
        <ul>
          <li>POSTER</li>
          <li>POSTER REDES</li>
          <li>VOLANTES</li>
          <li>INDIVIDUALS</li>
          <li>MUGS</li>
          <li>TARJETAS PERSONALES</li>
          <li>BANNER</li>
        </ul>
      </div>
    </div>
  );
}
