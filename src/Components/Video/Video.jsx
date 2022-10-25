import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState, useRef } from 'react';
// import Image from '~/Image';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';

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
         bounding.top >= 0 &&
         bounding.left >= 0 &&
         bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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
         <Link to={'/'}>
            <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.avatar} />
         </Link>
         <div className={cx('container')}>
            <div className={cx('info')}>
               <div className={cx('name')}> {data.user.nickname} </div>
               <Button primary className={cx('btn-follow')}>
                  Follow
               </Button>

               <div className={cx('caption')}>
                  Cầm 45K Ăn Sập Lotte Cinema Huế Và Cái Kết #ansaphue #dcgr #reviewanngon #ancungtiktok #lottecinema
               </div>
            </div>
            <div className={cx('videoWrapper')}>
               <video loop className={cx('media')} src={data?.file_url} ref={videoRef}></video>
            </div>
         </div>
      </div>
   );
}
export default Video;
