import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Video({ data }) {
   const [isPlaying, setisPlaying] = useState(false);
   console.log(data);

   return (
      <div className={cx('wrapper')}>
         <img src={data.thumb_url} />
      </div>
   );
}
export default Video;
