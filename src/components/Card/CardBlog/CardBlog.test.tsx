import {render,screen,cleanup, waitFor, waitForElementToBeRemoved, getByText, queryByPlaceholderText} from '@testing-library/react';
import { CardBlog } from './CardBlog';
import blog from '../../../resource/blog/01.png';


describe('Card Blog Component',()=>{

  it('should render the card component',()=>{

    render(<CardBlog/>);

    const cardBlog = screen.getByTestId('card-blog');

    expect(cardBlog).toBeInTheDocument();

  

  });

  it('check text in component',()=>{

    const {getByText} = render(<CardBlog/>)
    expect(getByText('If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...')).toBeInTheDocument();
    expect(getByText('01.09.2020')).toBeInTheDocument();

  })

  it('check src',()=>{

    const {getByAltText} =render(<CardBlog/>)

    const image=getByAltText('default');

   // expect(image.src).toContain(blog);

    expect(image).toHaveAttribute('src',blog);

  });
  it('check src',()=>{

    const {getByAltText} =render(<CardBlog/>)

    const image=getByAltText('default');

   
    expect(image).toHaveAttribute('src',blog);

  });

  it ('Card blog check  render component with props',()=>{
    
    const {getByAltText,getByText,queryByText} =render(<CardBlog img={blog} text='lucas' date='10.10.2010' alt='text-new'/>)
    
    const image=getByAltText('text-new');
    expect(image).toHaveAttribute('src',blog);
    expect(getByAltText('text-new')).toBeInTheDocument();
    expect(getByText('10.10.2010')).toBeInTheDocument();
    expect(queryByText('01.09.2020')).not.toBeInTheDocument();

  })
})