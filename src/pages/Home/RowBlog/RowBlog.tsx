import { CardBlog } from "../../../components/Card/CardBlog/CardBlog";
import { blogs } from "../../../libs/http/blogs/blogs";
import { Blogs } from "../../../libs/http/blogs/blogs.types";
import styles from "./RowBlog.module.scss";

interface BlogsProps {
  data: Blogs[];
}

export function RowBlog({ data }: BlogsProps) {
  console.log(data);
  return (
    <div className={styles.rowBlog}>
      {data.map((item) => (
        <CardBlog text={item.richText} key={item._id} />
      ))}
    </div>
  );
}
