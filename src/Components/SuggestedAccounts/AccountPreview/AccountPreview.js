import classNames from 'classnames/bind'
import Button from '~/Components/Button'
import styles from './AccountPreview.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountPreview({ nickname, username }) {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('header')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1665824400&x-signature=1FNOh0BK2%2Bz%2Bpvyw3rOTeOlUt70%3D' alt='' />
                <Button primary className={cx('btn-follow')}   >Follow</Button>
            </div>
            <div className={cx('body')} >
                <div className={cx('nickname')} >
                    <h4 className={cx('name')} >{nickname}</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('username')} >{username}</p>
            </div>
            <div className={cx('user-stats')} >
                <span className={cx('stat-num')}  >7.6M</span>
                <span className={cx('stats')}  >Followers</span>
                <span className={cx('stat-num')}  >529M</span>
                <span className={cx('stats')}  >Likes</span>
            </div>

        </div>
    )
}

AccountPreview.propTypes = {


}
export default AccountPreview