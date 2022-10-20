import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'

import config from '~/Routes/config'
import { FollowingIcon, HomeIcon, LiveIcon } from '~/Components/Icons'
import SuggestedAccounts from '~/Components/SuggestedAccounts'
import { useEffect, useState } from 'react'
import * as SuggestedServices from '~/Services/SuggestedAcounts'

const cx = classNames.bind(styles)




function Sidebar() {
   const [isSeeAll, setisSeeAll] = useState(false)
   const [suggests, setSuggests] = useState([])

   useEffect(() => {
      const fetchAPI = async () => {

         if (!isSeeAll) {
            const result = await SuggestedServices.Suggest(1, 4)
            setSuggests(result)
         } else {
            const result = await SuggestedServices.Suggest(1, 16)
            setSuggests(result)
         }
      }
      fetchAPI()

   }, [isSeeAll])

   console.log(suggests)
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title='For Your' to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title='Following' to={config.routes.following} icon={<FollowingIcon />} />
            <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} />
         </Menu>

         <div className={cx('suggested')}>
            <p className={cx('more-btn')} > Suggested accounts</p>
            {suggests.map((suggest) => {
               return <SuggestedAccounts key={suggest.id} data={suggest} />
            })}
            {isSeeAll
               ?
               <div className={cx('see-all')} onClick={() => setisSeeAll(false)}>See less</div>
               :
               <div className={cx('see-all')} onClick={() => setisSeeAll(true)}>See all</div>
            }
         </div>
         {/* <div className={cx('following')}>
            <p className={cx('title')}>Following accounts</p>
            <SuggestedAccounts />
            <SuggestedAccounts />
            <SuggestedAccounts />
            <SuggestedAccounts />

            <div className={cx('see-all')}>See more</div>
         </div> */}


      </aside >)
}

export default Sidebar