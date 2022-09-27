import {axios} from '../axios';
import {Banners} from './banners.types';

export const banners={
  getBanners:():Promise<{data: Banners[]}>=>axios.get('/banners'),
}
