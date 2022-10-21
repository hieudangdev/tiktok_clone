import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import AccountPreview from './AccountPreview'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types'
import Image from '../Image'
const cx = classNames.bind(styles)

function AccountItem({ data }) {
    const renderItems = (props) => (
        <div className={cx('Item-list')} tabIndex='-1' {...props}>
            <PopperWrapper className={cx('preview')}>
                <AccountPreview
                    nickname={`${data.first_name} ${data.last_name} `}
                    username={data.nickname}
                    followers={data.followers_count}
                    likes={data.likes_count}
                    avatar={data.avatar}
                    check={data.tick}
                />
            </PopperWrapper>
        </div>
    )

    return (
        <div>
            <Tippy interactive zIndex='99' delay={[900, 0]} placement='bottom-start' render={renderItems}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />

                    <div className={cx('item-info')}>
                        <div className={cx('item-name')}>
                            <h4 className={cx('name')}> {`${data.first_name} ${data.last_name}`} </h4>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </div>
                        <p className={cx('username')}>{data.nickname}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem
