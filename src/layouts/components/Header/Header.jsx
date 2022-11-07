import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
   faPlus,
   faEllipsisVertical,
   faEarthAmerica,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';

//local import

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu/Menu';
import { MessageIcon, UploadIcon } from '~/Components/Icons/Icons';
import Images from '~/Components/Image/Image';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/Routes/config/routes';
import { ModalContext } from '~/Components/Modal';
import { useContext } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <Icon icon={faEarthAmerica} />,
      title: 'English',
      children: {
         title: 'Languages',
         data: [
            {
               type: 'languages',
               code: 'en',
               title: 'English',
            },
            {
               type: 'languages',
               code: 'vi',
               title: 'Vietnamese',
            },
         ],
      },
   },
   {
      icon: <Icon icon={faCircleQuestion} />,
      title: 'Feadback and help',
      to: '/feadback',
   },
   {
      icon: <Icon icon={faKeyboard} />,
      title: 'keyboard shortcuts',
   },
];

const MENU_USERS = [
   {
      icon: <Icon icon={faUser} />,
      title: 'View profile',
   },
   {
      icon: <Icon icon={faCoins} />,
      title: 'Get coins',
   },
   {
      icon: <Icon icon={faGear} />,
      title: 'Settings',
   },
   ...MENU_ITEMS,
   {
      icon: <Icon icon={faSignOut} />,
      title: 'Log out',
      separate: true,
   },
];

function Header() {
   const context = useContext(ModalContext);
   const currentUser = context.islogin;

   const handleMenu = (menuitem) => {
      if (menuitem.title === 'Log out') {
         context.handlelogined();
      }
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <Link to={routesConfig.home} className={cx('logo-link')}>
                  <img src={images.logo} alt='Tiktok' />
               </Link>
            </div>
            {/* search */}
            <Search />

            {/*Action  */}

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Button text className={cx('action-btn')}>
                        <Icon className={cx('icon-plus')} icon={faPlus} />
                        Upload
                     </Button>
                     <Tippy delay={[0, 300]} content='Messages' placement='bottom'>
                        <button className={cx('action-btn')}>
                           <UploadIcon className={cx('icon-action')} />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 300]} content='Inbox' placement='bottom'>
                        <button className={cx('action-btn')}>
                           <MessageIcon className={cx('icon-message')} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>
                        <Icon className={cx('icon-plus')} icon={faPlus} />
                        Upload
                     </Button>
                     <Button primary onClick={context.handleShowModal}>
                        Log in
                     </Button>
                  </>
               )}

               <Menu items={MENU_ITEMS} User={MENU_USERS} onChange={handleMenu}>
                  {currentUser ? (
                     <Images
                        className={cx('user-avatar')}
                        src={'https://gamek.mediacdn.vn/133514250583805952/2021/9/17/photo--1631856680040545802895.jpg'}
                        alt={'hieuadmin'}
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <Icon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
