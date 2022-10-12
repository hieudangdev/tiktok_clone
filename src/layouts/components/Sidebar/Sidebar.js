import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'

import config from '~/Routes/config'
import { FollowingIcon, HomeIcon, LiveIcon } from '~/Components/Icons'

const cx = classNames.bind(styles)



function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title='For Your' to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title='Following' to={config.routes.following} icon={<FollowingIcon />} />
            <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} />
         </Menu>

      </aside>)
}

export default Sidebar