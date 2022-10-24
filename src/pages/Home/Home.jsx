import { useEffect } from 'react';
import { useState } from 'react';
import * as VideoHome from '~/Services/Video';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from '~/Components/Video/';

const cx = classNames.styles();

function Home() {
   const [videos, setvideos] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         const result = await VideoHome.videoHome();
         setvideos(result);
      };
      fetchAPI();
   }, []);

   return (
      <div className={cx('HomeWrapper')}>
         {videos.map((video) => (
            <Video key={video.id} data={video} />
         ))}
      </div>
   );
}

export default Home;
