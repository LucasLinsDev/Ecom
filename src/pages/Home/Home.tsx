import { Companies } from '../../components/Card/Companies/Companies';
import { Hero } from '../../components/Hero/Hero';
import { Layout } from '../../components/Layout/Layout';
import { RowBlog } from './RowBlog/RowBlog';
import { RowIcons } from './RowIcons/RowIcons';
import { RowProducts } from './RowProducts/RowProducts';
import { RowTestmonial } from './RowTestmonial/RowTestmonial';

export function Home(){
  return(
    <>
        <Layout>
          <Hero/>
          {[1,2,3].map((index)=>(
            <RowProducts key={index}/>
          ))}
           <Companies/>
           <RowBlog/>
           <RowTestmonial/>
           <RowIcons/>
        </Layout>
    </>
  )
}