import React, { useState } from "react";
import {
  HiCollection,
  HiOutlineEmojiHappy,
  HiSave,
  HiShare,
} from "react-icons/hi";
import styles from "./Canvas.module.scss";

export function Canvas() {
  const [template, setTemplate] = useState(false);

  return (
    <div className={styles.canvas}>
      <div className={styles.menus}>
        <div className={styles.content_editor}>
          <div className={styles.content_editor_text}>
            <h1>Elements</h1>
            <h2>Headline</h2>
            <p>Body Text</p>
          </div>
          <div className={styles.content_editor_block_text}>
            <div className={styles.editor_size}></div>
            <div className={styles.editor_styles}></div>
          </div>
        </div>
        <div className={styles.template}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
            <div className={styles.template_item}></div>
          ))}
        </div>
      </div>

      <div className={styles.canvas_container}>
        <div className={styles.user}>
          <div className={styles.icons}>
            <HiOutlineEmojiHappy size={26} color="#f65cb8" />
          </div>
          <div>
            <h2>Jorge Perez</h2>
            <div>JS</div>
          </div>
        </div>
        <div className={styles.canvas_editor}></div>
        <div className={styles.canvas_save_and_share}>
          <div className={styles.save}>
            <HiSave size={26} color="#f65cb8" />
          </div>
          <div className={styles.share}>
            <HiShare size={26} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
