import {axios} from '../axios';
import {Produtcs} from './products.types';

export const products={
  getProducts:():Promise<{data:Produtcs[]}>=>axios.get('/api/v1/products/'),
}
