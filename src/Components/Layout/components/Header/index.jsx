import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faSearch, faPlug, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
//local import
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrappe } from '~/Components/Popper';
import AcountItem from '~/Components/AcountItem';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function Header() {
   const [Searchresult, setSearchresult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchresult([]);
      }, 0);
   }, []);
   //localtest
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt='Tiktok' />
            </div>
            <Tippy
               visible={Searchresult.length > 0}
               interactive
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                     <PopperWrappe>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                     </PopperWrappe>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder='Search accounts and videos' spellCheck={false} />
                  {/* <button className={cx('clear')}>
                     <Icon icon={faCircleXmark} />
                  </button> */}
                  {/* <Icon className={cx('loading')} icon={faSpinner} /> */}
                  <button className={cx('search-btn')}>
                     <svg width='24' height='24' viewBox='0 0 48 48' fill='rgba(22, 24, 35, 0.34)' xmlns='http://www.w3.org/2000/svg'>
                        <path
                           fill-rule='evenodd'
                           clip-rule='evenodd'
                           d='M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z'
                        ></path>
                     </svg>
                  </button>
               </div>
            </Tippy>
            {/*Action  */}
            <div className={cx('action')}>
               <Button text>
                  <Icon className={cx('icon-plus')} icon={faPlus} />
                  Upload
               </Button>
               <Button primary> Log in</Button>
               <i className={cx('icon-ellip')}>
                  <svg style={{ width: '20px', height: '20px', display: 'block' }} width='1em' height='1em' viewBox='0 0 48 48' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                     <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z'
                     ></path>
                  </svg>
               </i>
            </div>
         </div>
      </header>
   );
}

export default Header;
