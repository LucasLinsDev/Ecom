import {axios} from '../axios';
import { Blogs } from './blogs.types';

export const blogs ={
  getBlogs:():Promise<{data: Blogs[]}>=>axios.get('/api/v1/blogs/')
}