import { useEffect } from "react";
import styles from "./Default.module.scss";

export function Default() {
  useEffect(() => {
    const boldBtn = document.querySelector("#bold-btn");
    const underlineBtn = document.querySelector("#underline-btn");
    const italicBtn = document.querySelector("#italic-btn");
    const colorBtn = document.querySelector("#color-btn");
    const txtBtn = document.querySelector("#save");
    const content: any = document.querySelector("#content");
    console.log(colorBtn);
    boldBtn?.addEventListener("click", () => {
      document.execCommand("bold");
    });

    underlineBtn?.addEventListener("click", () => {
      document.execCommand("underline");
    });

    italicBtn?.addEventListener("click", () => {
      document.execCommand("italic");
    });

    txtBtn?.addEventListener("click", () => {
      const a = document.createElement("a");
      const blob = new Blob([content.textContent]);
      const dataUrl = URL.createObjectURL(blob);
      a.href = dataUrl;
      a.download = "document.txt";
      a.click();
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button className={styles.btn_primary}>File</button>
        <button className={styles.btn_primary} id="save">
          save
        </button>
        <input type="text" id="filename-input" />
        <div className={styles.control_btn_container}>
          <button className={styles.button} id="bold-btn">
            B
          </button>
          <button className={styles.button}>U</button>
          <button className={styles.button}>I</button>
          <input type="color" id="color-btn" value="black" />
        </div>
      </div>
      <div
        className={styles.content}
        contentEditable={true}
        spellCheck={true}
        id="content"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        perspiciatis distinctio quos quisquam molestiae aliquam doloribus quae,
        iure repudiandae nesciunt animi fugit accusamus natus exercitationem
        quam modi numquam blanditiis inventore?
      </div>
    </div>
  );
}
