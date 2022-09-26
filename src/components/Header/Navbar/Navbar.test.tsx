import {render,screen,cleanup, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { menuitem } from './data';
import { Navbar } from './Navbar';


test('should render todo component',()=>{

  render(<Navbar/>)

  const nav=screen.getByTestId('navbar');

  expect(nav).toBeInTheDocument();

})

test('check if a link in component',()=>{

  const {getByText}=render(<Navbar/>)

  expect(getByText('Laptops')).toBeTruthy();
  expect(getByText('Computador')).toBeTruthy();
  expect(getByText('Smartphones')).toBeTruthy();
  expect(getByText('Gamer')).toBeTruthy();
  expect(getByText('About')).toBeTruthy();


})




test('check fi a link component render with props',()=>{

  const {getByText,debug}= render(<Navbar data={menuitem}/>);
  
  //debug();

  expect(getByText('Computadores')).toBeTruthy();
  expect(getByText('Notebook')).toBeTruthy();
  expect(getByText('Celular')).toBeInTheDocument();

 // debug();
})


test('shoud render a component',()=>{

 render(<Navbar/>)

  const logoElement=screen.getByTestId('navbar');

  expect(logoElement.firstChild).toHaveAttribute('class');


})

//QUERY NÃO FAZ OS TESTE FALAR 

//FIND ELE ESPERA O ELEMENTO APARECER EM TELA


// describe('App component',()=>{

//   it('should be able to add new item to the list',async ()=>{

//    const {getByText ,getByPlaceholderText,findByText,getAllByText} =render(<Navbar/>);

//    const inputElement = getByPlaceholderText('Novo item');



//    const addButton=getByText('Adicionar');

//    userEvent.type(inputElement,'Novo')

//    userEvent.click(addButton);

//    //expect(getByText('Novo')).toBeInTheDocument();
//    expect(await findByText('Novo')).toBeInTheDocument();

//    await waitFor(()=>{
//     expect(getByText('Novo')).toBeInTheDocument()
//   })

//   })

//    it('should be able to add new item to the list',async ()=>{

//    const {getByText ,getByPlaceholderText,findByText,getAllByText,queryByText} =render(<Navbar/>);

   
//    const removeButtons=getAllByText('Remover');

//     userEvent.click(removeButtons[0]);


//    await waitForElementToBeRemoved(()=>{
//     expect(queryByText('Novo')).not.toBeInTheDocument()
//   })

//   })

// })