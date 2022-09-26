import {render,screen,cleanup, waitFor, waitForElementToBeRemoved, getByText, queryByPlaceholderText} from '@testing-library/react';
import { Profile } from './Profile';

import avatar from '../../../resource/avatar/avatar.png';
describe('Profile Component', ()=>{

  it('should render search component',()=>{
    render(<Profile/>)
    const profile=screen.getByTestId('profile');
    expect(profile).toBeInTheDocument();
  })
  it('should render search component white prop image',()=>{
    render(<Profile img={avatar} username='lucas'/>)
    const profile=screen.getByTestId('profile');
    expect(profile).toBeInTheDocument();
    expect(profile.firstChild).toHaveAttribute('alt','lucas');
    expect(profile.firstChild).toHaveAttribute('src',avatar);
  })

})