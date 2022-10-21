import classNames from 'classnames/bind'
import Button from '~/Components/Button'
import styles from './AccountPreview.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from '~/Components/Image'

const cx = classNames.bind(styles)

function AccountPreview({ nickname, username, followers, likes, avatar, check }) {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={avatar} alt={avatar} />
                <Button primary className={cx('btn-follow')}   >Follow</Button>
            </div>
            <div className={cx('body')} >
                <div className={cx('nickname')} >
                    <h4 className={cx('name')} >{nickname}</h4>
                    {check && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('username')} >{username}</p>
            </div>
            <div className={cx('user-stats')} >
                <span className={cx('stat-num')} >{followers}</span>
                <span className={cx('stats')}  >Followers</span>
                <span className={cx('stat-num')}  >{likes}</span>
                <span className={cx('stats')}  >Likes</span>
            </div>

        </div>
    )
}

AccountPreview.propTypes = {


}
export default AccountPreview