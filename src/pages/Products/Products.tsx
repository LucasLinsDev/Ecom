import { Box } from "../../components/Box/Box";
import { CartProduct } from "../../components/Card/Product/CardProduct";
import { Container } from "../../components/Container/Container";
import { Grid } from "../../components/Grid/Grid";
import { Layout } from "../../components/Layout/Layout";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Row } from "../../components/Row/Row";
import { Banner } from "./Banner/Banner";
import styles from "./Products.module.scss";
import { SearchBox } from "./Search/Search";

import ps5 from "../../resource/img/ps5.png";
import { ButtonSearch } from "./Button/Button";
import { Button as FilterButton } from "../../components/Sidebar/Button/Button";

import { Category } from "../../components/Sidebar/Category/Category";
import { Color } from "../../components/Sidebar/Color/Color";
import { Filter } from "../../components/Sidebar/Filter/Filter";
import { Brands } from "../../components/Sidebar/Brands/Brands";
import { BannerLeft } from "../../components/Sidebar/Banner/Banner";
import { useEffect, useState } from "react";
import { Produtcs } from "../../libs/http/products/products.types";
import { products as productsHttp } from "../../libs/http/products/produts";
import { CardProduct } from "../../components/Card/CardProduct/CardProduct";
export function Products() {
  const [products, setProducts] = useState<Produtcs[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await productsHttp.getProducts();

      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <Layout>
      <Banner />
      <PageHeader />
      <Container display="flex" gap={16}>
        <Box width={280}>
          <FilterButton />
          {[1, 2].map((index) => (
            <Category />
          ))}
          <Color />
          <Filter />
          <Brands />
          <BannerLeft />
        </Box>
        <Box width={1180}>
          <SearchBox />
          <ButtonSearch title="MSI GS SERIES" />
          <Row>
            <Grid>
              {products.map((item, index) => (
                <CartProduct
                  button
                  title={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
              {/**
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              ].map((index) => (
                <CartProduct button image={ps5} title="PS5" price={"999.99"} />
              ))}
              */}
            </Grid>
          </Row>
        </Box>
      </Container>
    </Layout>
  );
}
