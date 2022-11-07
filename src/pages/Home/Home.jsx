import { useEffect, useRef } from 'react';
import { useState } from 'react';
import * as HomeServices from '~/Services/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '~/Components/Video/';
import createScrollSnap from 'scroll-snap';
import useScrollSnap from 'react-use-scroll-snap';
import { createRef } from 'react';

const cx = classNames.bind(styles);

function Home() {
   const [videos, setvideos] = useState([]);
   const [page, setPage] = useState(1);
   const [volume, setVolume] = useState(0.2);
   const [prevVolume, setPrevVolume] = useState(volume);
   const [mute, setMute] = useState(true);

   useEffect(() => {
      const fetchAPI = async () => {
         const result = await HomeServices.VideoApi('for-you', page);
         setvideos((prev) => [...prev, ...result]);
      };
      fetchAPI();
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
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
   const container = useRef(null);
   useScrollSnap({ ref: container });

   return (
      <section className={cx('HomeWrapper')} ref={container}>
         {videos.map((video, index) => (
            <Video
               key={index}
               data={video}
               volume={volume}
               mute={mute}
               adjustVolume={handleAdjustVolume}
               toggleMuted={toggleMuted}
            />
         ))}
      </section>
   );
}

export default Home;
