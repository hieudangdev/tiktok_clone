import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'

import config from '~/Routes/config'
import { FollowingIcon, HomeIcon, LiveIcon } from '~/Components/Icons'
import SuggestedAccounts from '~/Components/SuggestedAccounts'

const cx = classNames.bind(styles)




function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title='For Your' to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title='Following' to={config.routes.following} icon={<FollowingIcon />} />
            <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} />
         </Menu>

         <SuggestedAccounts title='Suggested accounts' items='5' itemsMore='8' page='3' moreBtn='See all' moreBtn_less='See less' />
         <SuggestedAccounts title='Following accounts' items='7' itemsMore='10' page='6' moreBtn='See more' moreBtn_less='See more' />

      </aside >)
}

export default Sidebar