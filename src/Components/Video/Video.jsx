import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState, useRef } from 'react';
// import Image from '~/Image';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CommentIcon, HeartIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function Video({ data }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const videoRef = useRef();

   // videoRef.current.play();
   const playVideo = () => {
      if (isPlaying === false) {
         videoRef.current.play();
         setIsPlaying(true);
      }
   };

   const pauseVideo = () => {
      if (isPlaying === true) {
         videoRef.current.pause();
         setIsPlaying(false);
      }
   };

   const togglePlayVideo = () => {
      if (isPlaying === false) {
         playVideo();
      } else {
         pauseVideo();
      }
   };

   function PlayVideoInViewPort() {
      var bounding = videoRef.current.getBoundingClientRect();
      console.log(bounding);
      // playVideo();
      if (
         bounding.top >= -100 &&
         bounding.left >= 0 &&
         bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200
      ) {
         playVideo();
      } else {
         pauseVideo();
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', PlayVideoInViewPort);
      return () => window.addEventListener('scroll', PlayVideoInViewPort);
   });

   return (
      <div className={cx('wrapper')}>
         <div className={cx('videoWrapper')}>
            <video loop className={cx('media')} src={data?.file_url} ref={videoRef}></video>
         </div>

         <div className={cx('container')}>
            <div className={cx('post')}>
               <div className={cx('info')}>
                  <div className={cx('bio')}>
                     <Link to={'/'}>
                        <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.avatar} />
                     </Link>
                     <div className={cx('user')}>
                        <div className={cx('username')}> {data.user.nickname} </div>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        <div className={cx('fullname')}> {`${data.user.first_name} ${data.user.last_name}`} </div>
                     </div>
                  </div>
                  <div>
                     <Button outline className={cx('btn-follow')}>
                        Follow
                     </Button>
                  </div>
               </div>
               <div className={cx('caption')}>
                  Cầm 45K Ăn Sập Lotte Cinema Huế Và Cái Kết #ansaphue #dcgr #reviewanngon #ancungtiktok #lottecinema
               </div>
               <div className={cx('title_music')}>Gu - Freaky Seachains</div>
            </div>
            <div className={cx('actions')}>
               <div className={cx('btn-wrapper')}>
                  <button rounded className={cx('btn-action')}>
                     <HeartIcon />
                  </button>
                  <p className={cx('numbers')}>{280}</p>
               </div>
               <div className={cx('btn-wrapper')}>
                  <button rounded className={cx('btn-action')}>
                     <CommentIcon />
                  </button>
                  <p className={cx('numbers')}>{data?.comments_count}</p>
               </div>
               <div className={cx('btn-wrapper')}>
                  <button rounded className={cx('btn-action')}>
                     <ShareIcon />
                  </button>
                  <p className={cx('numbers')}>{data?.shares_count}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Video;
