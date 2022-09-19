
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Images from '../Images'
import styles from './AcountItem.module.scss'

const cx = classNames.bind(styles)

function AcountItem({ children }) {
  return (
    <div className={cx('wrapper')}>{children}
      <Images src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c2d043a2fcee0e5d14836ceb6ff8ab64~c5_100x100.jpeg?x-expires=1660381200&x-signature=%2Bh%2BoLO7O3MmSlyu40BW01j6LJS0%3D" alt="hoa" className={cx('avatar')} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen van a</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>  @nguyenvana</span>
      </div>

    </div>
  )
}
export default AcountItem