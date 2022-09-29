import { useEffect, useState } from "react";
import { Companies } from "../../components/Card/Companies/Companies";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { Banners } from "../../libs/http/banners/banners.types";
import { RowBlog } from "./RowBlog/RowBlog";
import { RowIcons } from "./RowIcons/RowIcons";
import { RowProducts } from "./RowProducts/RowProducts";
import { RowTestmonial } from "./RowTestmonial/RowTestmonial";
import { banners as bannersHttp } from "../../libs/http/banners/banner";
import { products as productsHttp } from "../../libs/http/products/produts";
import { blogs as blogsHttp } from "../../libs/http/blogs/blogs";
import { Produtcs } from "../../libs/http/products/products.types";
import { Blogs } from "../../libs/http/blogs/blogs.types";

export function Home() {
  const [banners, setBanners] = useState<Banners[]>();
  const [products, setProducts] = useState<Produtcs[]>([]);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const getBanners = async () => {
      const { data } = await bannersHttp.getBanners();
      setBanners(data);
    };
    getBanners();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productsHttp.getProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await blogsHttp.getBlogs();

      setBlogs(data);
    };

    getBlogs();
  }, []);

  return (
    <>
      <Layout>
        <Hero data={banners} />
        {[1, 2, 3].map((index) => (
          <RowProducts key={index} data={products} />
        ))}
        <Companies />
        <RowBlog data={blogs} />
        <RowTestmonial />
        <RowIcons />
      </Layout>
    </>
  );
}
