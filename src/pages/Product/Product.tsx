import { BG } from "../../components/BG/BG";
import { Box } from "../../components/Box/Box";
import { CardIcons } from "../../components/Card/CardIcons/CardIcons";
import { Container } from "../../components/Container/Container";
import { Layout } from "../../components/Layout/Layout";
import { Row } from "../../components/Row/Row";
import { BannerSwipper } from "./BannerSwipper/BannerSwipper";
import { Description } from "./Description/Description";
import { Featues } from "./Featues/Featues";
import { ImgProduct } from "./ImgProduct/ImgProduct";
import styles from "./Product.module.scss";
import { Support } from "./Support/Support";
import icones from "../../resource/img/icone_fone.png";
import { useEffect, useState } from "react";
import { products as producstHttp } from "../../libs/http/products/produts";
import { useParams } from "react-router-dom";
import { Produtcs } from "../../libs/http/products/products.types";
export function Product() {
  const [product, setProduct] = useState<Produtcs>();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await producstHttp.getProduct(id);
    };

    getProduct();
  });

  return (
    <Layout max>
      <Container width={1440}>
        <Row responsive reverse>
          <Box width={820}>
            <Description />
          </Box>
          <Box width={620}>
            <ImgProduct />
          </Box>
        </Row>
      </Container>
      <BannerSwipper />
      <BG color="#F5F7FF">
        <Container width={1120}>
          <Support />
        </Container>
      </BG>
      <BG color="black">
        <Container width={1440}>
          <Featues />
        </Container>
      </BG>

      <Container width={1440} paddingVertical={96}>
        <Row>
          {[1, 2, 3].map((index) => (
            <CardIcons icone={icones} alt="fone" />
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
