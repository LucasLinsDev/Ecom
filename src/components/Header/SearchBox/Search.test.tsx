import {render,screen,cleanup, waitFor, waitForElementToBeRemoved, getByText, queryByPlaceholderText} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBox } from './SearchBox';


describe('Search Component',() => { 

  it('should render search component',()=>{
     render(<SearchBox/>)
     const search=screen.getByTestId('search-box');

     expect(search).toBeInTheDocument();
  })

  it('shuld the placeholder',()=>{
    const {getByPlaceholderText,queryByPlaceholderText,getByText,getByDisplayValue}=  render(<SearchBox/>);
    const inputElement=getByPlaceholderText('Search...');

    userEvent.type(inputElement,'T-shirt');
    const searchicone=screen.getByTestId('search_icone');
    expect(getByDisplayValue('T-shirt')).toBeInTheDocument();
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(queryByPlaceholderText('Search')).not.toBeInTheDocument();

   })

})