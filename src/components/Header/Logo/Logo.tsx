import styles from './Logo.module.scss';
import iconlogo from '../../../resource/logo/logo.svg'
import iconlogowhite from '../../../resource/logo/logo_white.svg'
import {useMediaQuery} from 'react-responsive';

interface PropsLogo{
  icon?:any;
}

export function Logo({icon=iconlogo}:PropsLogo){
  const icons=useMediaQuery({query:'max-width:800px'});
  return (
    <div className={styles.logo}>
        {icons ?  <img src={iconlogowhite} data-testid='logo'  data-cy='logo' alt='Logo' /> : <img src={icon} data-testid='logo' data-cy='logo'  alt='Logo' />}
    </div>
  )
}