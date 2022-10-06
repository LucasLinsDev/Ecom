import { HiSearch } from "react-icons/hi";
import { Canvas } from "./Canvas/Canvas";
import styles from "./EditorPost.module.scss";
import { Layout } from "./Layout/Layout";
import { Menu } from "./Menu";

export function CanvasEditor() {
  return (
    <Layout>
      <Menu />
      <Canvas />
    </Layout>
  );
}
