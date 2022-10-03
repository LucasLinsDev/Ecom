import styles from "./CardBlog.module.scss";
import blog from "../../../resource/blog/01.png";

interface PropsBlog {
  img?: string;
  alt?: string;
  text?: string;
  date?: string;
}

const content: string =
  "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...";

export function CardBlog({
  img,
  alt = "default",
  text = content,
  date = "01.09.2020",
}: PropsBlog) {
  return (
    <div className={styles.card} data-testid="card-blog" data-cy="card-blog">
      <div className={styles.image}>
        <img src={blog} alt={alt} />
      </div>
      <p>{text.slice(0, 100).toString()}</p>
      <span>{date}</span>
    </div>
  );
}
