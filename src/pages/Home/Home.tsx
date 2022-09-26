import { Companies } from '../../components/Card/Companies/Companies';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Layout } from '../../components/Layout/Layout';
import styles from './Home.module.scss';
import { RowProducts } from './RowProducts/RowProducts';

export function Home(){
  return(
    <>
        <Layout>
          <Hero/>
          <Companies/>
          <RowProducts/>
        </Layout>
    </>
  )
}