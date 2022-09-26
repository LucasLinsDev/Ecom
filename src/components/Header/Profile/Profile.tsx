import styles from './Profile.module.scss';

import avatar from '../../../resource/avatar/avatar.png'

interface PropsProfile{
  img?:string;
  username?:string;
}

export function Profile({img=avatar,username}:PropsProfile){
  return(
    <div className={styles.avatar} data-cy='profile' data-testid='profile' >
      <img src={img} alt={username}/>
    </div>
  )
}