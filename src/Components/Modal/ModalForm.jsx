import classNames from 'classnames/bind';
import { useState, useMemo, useEffect } from 'react';

import {
   ChevronDownIcon,
   IconApple,
   IconFb,
   IconGg,
   IconInstagram,
   IconkakaoTalk,
   IconLine,
   IconTwitter,
   QRIcon,
   UserIcon,
   XMarkIcon,
} from '~/components/Icons';
import styles from './ModalForm.module.scss';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from './ModalProvider';

const cx = classNames.bind(styles);

function ModalForm({ onHide }) {
   const [formLoginState, setFormLoginState] = useState('login');
   const [filteredForm, setFilteredForm] = useState([]);
   const context = useContext(ModalContext);

   const loginRegisterForm = useMemo(
      () => [
         {
            type: 'login',
            title: 'Log in to TikTok',
            contents: [
               {
                  icon: <QRIcon />,
                  title: 'Use QR code',
               },
               {
                  icon: <UserIcon />,
                  title: 'Use phone / email / username',
               },
               {
                  icon: <IconFb />,
                  title: 'Continue with Facebook',
               },
               {
                  icon: <IconGg />,
                  title: 'Continue with Google',
               },
               {
                  icon: <IconTwitter />,
                  title: 'Continue with Twitter',
               },
               {
                  icon: <IconLine />,
                  title: 'Continue with LINE',
               },
               {
                  icon: <IconkakaoTalk />,
                  title: 'Continue with KakaoTalk',
               },
               {
                  icon: <IconApple />,
                  title: 'Continue with Apple',
               },
               {
                  icon: <IconInstagram />,
                  title: 'Continue with Instagram',
               },
            ],
         },
         {
            type: 'register',
            title: 'Sign up for TikTok',
            showMore: true,
            contents: [
               {
                  icon: <UserIcon />,
                  title: 'Use phone or email',
               },
               {
                  icon: <IconFb />,
                  title: 'Continue with Facebook',
               },
               {
                  icon: <IconGg />,
                  title: 'Continue with Google',
               },
            ],
         },
         {
            type: 'register-expanded',
            title: 'Sign up for TikTok',
            contents: [
               {
                  icon: <UserIcon />,
                  title: 'Use phone or email',
               },
               {
                  icon: <IconFb />,
                  title: 'Continue with Facebook',
               },
               {
                  icon: <IconGg />,
                  title: 'Continue with Google',
               },
               {
                  icon: <IconTwitter />,
                  title: 'Continue with Twitter',
               },
               {
                  icon: <IconLine />,
                  title: 'Continue with LINE',
               },
               {
                  icon: <IconkakaoTalk />,
                  title: 'Continue with KakaoTalk',
               },
            ],
         },
      ],
      [],
   );

   useEffect(() => {
      const newForm = loginRegisterForm.find((form) => form.type === formLoginState);
      setFilteredForm(newForm);
   }, [loginRegisterForm, formLoginState]);

   return (
      <div className={cx('modal-mask')}>
         <div className={cx('wrapper')}>
            <div className={cx('container')}>
               <div className={cx('inner')}>
                  <div className={cx('title')}>{filteredForm.title}</div>

                  <div className={cx('list')}>
                     {filteredForm.contents?.map((content, index) => {
                        return (
                           <Button
                              className={cx('btn-modalList')}
                              key={index}
                              onClick={() => {
                                 context.handlelogined();
                                 return context.handleHideModal();
                              }}
                           >
                              <span className={cx('icon')}>{content.icon}</span> <span>{content.title}</span>
                           </Button>
                        );
                     })}

                     {filteredForm.showMore && (
                        <div className={cx('more-btn')} onClick={() => setFormLoginState('register-expanded')}>
                           <ChevronDownIcon />
                        </div>
                     )}
                  </div>
               </div>

               {formLoginState.startsWith('register') && (
                  <div className={cx('agreement')}>
                     <p>
                        {' '}
                        By continuing, you agree to TikTok's <Link to='/'>Terms of Service</Link> and confirm that you
                        have read TikTok's <Link to='/'>Privacy Policy</Link>.
                     </p>
                  </div>
               )}

               <div className={cx('footer')}>
                  {formLoginState === 'login' ? (
                     <>
                        Don't have an account? <p onClick={() => setFormLoginState('register')}> Sign up</p>{' '}
                     </>
                  ) : (
                     <>
                        Already have an account? <p onClick={() => setFormLoginState('login')}>Log in</p>
                     </>
                  )}
               </div>
            </div>

            <div className={cx('close-btn')} onClick={onHide}>
               <XMarkIcon />
            </div>
         </div>
      </div>
   );
}

export default ModalForm;
