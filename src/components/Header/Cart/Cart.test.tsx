import {render,screen,cleanup} from '@testing-library/react';
import { Cart } from './Cart';


describe('it to render compoennt',()=>{

  it('should render todo component',()=>{

  render(<Cart/>)

  const logoElement = screen.getByTestId('card');

  expect(logoElement).toBeInTheDocument();

  })
  
})