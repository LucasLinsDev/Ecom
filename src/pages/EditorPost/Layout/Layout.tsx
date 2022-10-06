import styles from "./Layout.module.scss";

export function Layout({ children }: any) {
  return <div className={styles.layout}>{children}</div>;
}
