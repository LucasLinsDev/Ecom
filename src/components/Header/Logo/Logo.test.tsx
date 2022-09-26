import {render,screen,cleanup} from '@testing-library/react';

import {Logo} from './Logo'

import iconlogo from '../../../resource/logo/logo.svg';
import iconlogowhite from '../../../resource/logo/logo_white.svg';

test('should render todo component',()=>{

  render(<Logo/>)

  const logoElement = screen.getByTestId('logo');

  expect(logoElement).toBeInTheDocument();


})

test('check if has alt atribute',()=>{

  render(<Logo/>)

  const logoElement=screen.getByTestId('logo');

  expect(logoElement).toHaveAttribute('alt');

})



test('check if has src atribute',()=>{

  render(<Logo />)

  const logoElement=screen.getByTestId('logo');

  expect(logoElement).toHaveAttribute('src',iconlogo);


})


test('check if size the logo white',()=>{
  
  render(<Logo icon={iconlogowhite}/>)

  const logoElement=screen.getByTestId('logo');

  expect(logoElement).toHaveAttribute('src',iconlogowhite);
 
})


// test('check if size the logo',()=>{
  
//   render(<Logo/>)
//   const rect=document.querySelector('[data-testid="logo"]');
 
// })