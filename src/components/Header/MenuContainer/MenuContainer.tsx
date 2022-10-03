import styles from "./MenuContainer.module.scss";

import avatar from "../../../resource/avatar/avatar.png";
import { HiBan } from "react-icons/hi";
export function MenuContainer() {
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu_trigger}>
        <img src={avatar} />
      </div>
      <div className={styles.dropdown_menu}>
        <DropdownItem text="My Profile" />
        <DropdownItem text="My Profile" />
        <DropdownItem text="My Profile" />
      </div>
    </div>
  );
}

function DropdownItem(props: any) {
  return (
    <li className={styles.dropdown_item}>
      <HiBan size={16} color="white" />
      <a>{props.text}</a>
    </li>
  );
}
