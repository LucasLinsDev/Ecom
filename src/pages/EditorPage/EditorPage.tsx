import { useState } from "react";
import { setConstantValue } from "typescript";
import { Layout } from "../../components/Layout/Layout";
import styles from "./EditorPage.module.scss";
import { InlineEdit } from "./InlineEdit";

export function EditorPage() {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("lorem ipsumd olor");

  const handleEdit = () => {
    setEdit(true);
  };

  const save = (val: any) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    setEdit(false);
  };

  const headerType = () => {};

  return (
    <div className={styles.layout}>
      <div className={styles.editor}>
        <button onClick={headerType}> SET TYPE TE EBADER</button>
      </div>
      <div className={styles.layout_container}>
        {!edit ? (
          <h1 onClick={handleEdit}>{value}</h1>
        ) : (
          <InlineEdit defaultValue={value} saveText={save} cancelEdit={close} />
        )}
      </div>
    </div>
  );
}
