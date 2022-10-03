import { useState } from "react";
import styles from "./EditorPage.module.scss";

export function InlineEdit({ defaultValue, saveText, cancelEdit }: any) {
  const [value, setValue] = useState(defaultValue);

  return (
    <input
      value={value}
      className={styles.input}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
