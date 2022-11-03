import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState, useRef } from 'react';
// import Image from '~/Image';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faL, faRandom } from '@fortawesome/free-solid-svg-icons';
import {
   CommentIcon,
   FlagIcon,
   HeartIcon,
   HeartSoidIcon,
   MusicIcon,
   MutedIcon,
   PauseIcon,
   PlaySolidIcon,
   ShareIcon,
   ShareSolidIcon,
   VolumeIcon,
} from '../Icons';

const cx = classNames.bind(styles);

function Video({ data, mute, volume, adjustVolume, toggleMuted }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [like, setlike] = useState(false);
   const videoRef = useRef();

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
   }, []);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('videoWrapper')} onDoubleClick={(e) => setlike(true)}>
            <video loop className={cx('media')} src={data?.file_url} ref={videoRef}></video>
            <div className={cx('control-play')} onClick={togglePlayVideo}>
               {isPlaying ? <PauseIcon /> : <PlaySolidIcon />}
            </div>
            <div className={cx('control-volume', { active: mute })}>
               <div className={cx('containerVolume')}>
                  <input
                     type='range'
                     min='0'
                     max='100'
                     step='1'
                     orient='vertical'
                     onChange={adjustVolume}
                     value={volume * 100}
                  />
               </div>

               <div className={cx('volume-icon')} onClick={toggleMuted}>
                  {mute ? <MutedIcon /> : <VolumeIcon />}
               </div>
            </div>

            <div className={cx('report')}>
               <FlagIcon /> Report
            </div>
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
                  <div className={cx('btn-follow')}>
                     <Button outline>Follow</Button>
                  </div>
               </div>
               <div className={cx('caption')}>
                  Cầm 45K Ăn Sập Lotte Cinema Huế Và Cái Kết #ansaphue #dcgr #reviewanngon #ancungtiktok #lottecinema
               </div>
               <div className={cx('title_music')}> {<MusicIcon />}Gu - Freaky Seachains</div>
            </div>
            <div className={cx('actions')}>
               <div className={cx('btn-wrapper')}>
                  <button className={cx('btn-action')} onClick={() => setlike(!like)}>
                     {like ? <HeartSoidIcon /> : <HeartIcon />}
                  </button>
                  <p className={cx('numbers')}>{data?.likes_count || Math.floor(Math.random() * 1000) + 1}</p>
               </div>
               <div className={cx('btn-wrapper')}>
                  <button className={cx('btn-action')}>
                     <CommentIcon />
                  </button>
                  <p className={cx('numbers')}>{data?.comments_count || Math.floor(Math.random() * 1000) + 1}</p>
               </div>
               <div className={cx('btn-wrapper')}>
                  <button className={cx('btn-action')}>
                     <ShareSolidIcon />
                  </button>
                  <p className={cx('numbers')}>{data?.shares_count || Math.floor(Math.random() * 1000) + 1}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Video;
