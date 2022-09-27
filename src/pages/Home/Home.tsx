import { useEffect, useState } from 'react';
import { Companies } from '../../components/Card/Companies/Companies';
import { Hero } from '../../components/Hero/Hero';
import { Layout } from '../../components/Layout/Layout';
import { Banners } from '../../libs/http/banners/banners.types';
import { RowBlog } from './RowBlog/RowBlog';
import { RowIcons } from './RowIcons/RowIcons';
import { RowProducts } from './RowProducts/RowProducts';
import { RowTestmonial } from './RowTestmonial/RowTestmonial';
import {banners as bannersHttp} from '../../libs/http/banners/banner';
export function Home(){

  const [banners,setBanners]=useState<Banners[]>();

  useEffect(()=>{

    const getBanners = async () =>{

      const {data} = await bannersHttp.getBanners();
      
      
     setBanners(data);

    }

    getBanners();

  },[]);

  console.log(banners);


  return(
    <>
        <Layout>
          <Hero data={banners}/>
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