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

         <SuggestedAccounts label='Suggested accounts' more='See all' />
         {/* <SuggestedAccounts label='Following accounts' more='See more' /> */}

      </aside>)
}

export default Sidebar