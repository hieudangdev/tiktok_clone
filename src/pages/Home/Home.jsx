import { useEffect } from 'react';
import { useState } from 'react';
import * as HomeServices from '~/Services/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '~/Components/Video/';

const cx = classNames.bind(styles);

function Home() {
   const [videos, setvideos] = useState([]);
   const [page, setPage] = useState(1);
   const [volume, setVolume] = useState(0.4);
   const [prevVolume, setPrevVolume] = useState(volume);
   const [mute, setMute] = useState(true);

   useEffect(() => {
      const fetchAPI = async () => {
         const result = await HomeServices.VideoApi('for-you', page);
         setvideos(result);
      };
      fetchAPI();
   }, []);

   function handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
         setPage((page) => page + 1);
      }
   }
   const handleAdjustVolume = (e) => {
      setVolume(e.target.value / 100);
   };

   const toggleMuted = () => {
      if (mute) {
         setVolume(prevVolume);
         setMute(false);
      } else {
         setPrevVolume(volume);
         setVolume(0);
         setMute(true);
      }
   };

   return (
      <div className={cx('HomeWrapper')}>
         {videos.map((video) => (
            <Video
               key={video.id}
               data={video}
               volume={volume}
               mute={mute}
               adjustVolume={handleAdjustVolume}
               toggleMuted={toggleMuted}
            />
         ))}
      </div>
   );
}

export default Home;
