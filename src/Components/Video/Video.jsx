import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState } from 'react';
// import Image from '~/Image';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
   CommentIcon,
   FlagIcon,
   HeartIcon,
   HeartSoidIcon,
   MusicIcon,
   MutedIcon,
   PauseIcon,
   PlaySolidIcon,
   ShareSolidIcon,
   VolumeIcon,
} from '../Icons';
import { useRef } from 'react';
import { useElementOnScreen } from './VideoOnScreen';
import { useContext } from 'react';
import { ModalContext } from '../Modal';

const cx = classNames.bind(styles);

function Video({ data, mute, volume, adjustVolume, toggleMuted }) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [like, setlike] = useState(false);
   const [following, setfollowing] = useState(false);

   const videoRef = useRef();
   const context = useContext(ModalContext);
   useEffect(() => {
      if (mute) {
         videoRef.current.volume = 0;
      } else videoRef.current.volume = volume;
   });

   const togglePlayVideo = () => {
      if (isPlaying === false) {
         videoRef.current.play();
         setIsPlaying(true);
      } else {
         videoRef.current.pause();
         setIsPlaying(false);
      }
   };

   const isVisibile = useElementOnScreen(videoRef);

   useEffect(() => {
      if (isVisibile) {
         if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
         }
      } else {
         if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
         }
      }
   }, [isVisibile, isPlaying]);

   return (
      <div className={cx('videoElement')}>
         <div className={cx('wrapper')}>
            <div className={cx('videoWrapper')} onDoubleClick={(e) => setlike(true)}>
               <video
                  ref={videoRef}
                  volume={volume}
                  playsInline={true}
                  loop
                  autoPlay
                  className={cx('media')}
                  src={data?.file_url}
               ></video>
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
                     {mute || volume === 0 ? <MutedIcon /> : <VolumeIcon />}
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
                        <Button
                           small
                           outline
                           className={cx('btn-follow', { active: following })}
                           onClick={context.islogin ? () => setfollowing(!following) : context.handleShowModal}
                        >
                           {following ? 'Following' : 'Follow'}
                        </Button>
                     </div>
                  </div>
                  <div className={cx('caption')}>
                     {data?.description} Và Cái Kết #ansaphue #dcgr #reviewanngon #ancungtiktok #lottecinema
                  </div>
                  <div className={cx('title_music')}> {<MusicIcon />}Gu - Freaky Seachains</div>
               </div>
               <div className={cx('actions')}>
                  <div className={cx('btn-wrapper')}>
                     <button
                        className={cx('btn-action')}
                        onClick={context.islogin ? () => setlike(!like) : context.handleShowModal}
                     >
                        {like ? <HeartSoidIcon /> : <HeartIcon />}
                     </button>
                     <p className={cx('numbers')}>{data?.likes_count}</p>
                  </div>
                  <div className={cx('btn-wrapper')}>
                     <button className={cx('btn-action')} onClick={!context.islogin && context.handleShowModal}>
                        <CommentIcon />
                     </button>
                     <p className={cx('numbers')}>{data?.comments_count}</p>
                  </div>
                  <div className={cx('btn-wrapper')}>
                     <button className={cx('btn-action')} onClick={!context.islogin && context.handleShowModals}>
                        <ShareSolidIcon />
                     </button>
                     <p className={cx('numbers')}>{data?.shares_count}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Video;
