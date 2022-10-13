import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from "@tippyjs/react/headless"
import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import AccountPreview from './AccountPreview'



const cx = classNames.bind(styles)

function AccountItem() {

    const renderItems = (props) => (
        <div className={cx('Item-list')} tabIndex='-1' {...props}>
            <PopperWrapper className={cx('preview')}>
                <AccountPreview nickname={'hieuadmin'} username='hieu.com' />
            </PopperWrapper>
        </div>
    )
    return (
        <div>
            <Tippy
                interactive

                delay={[800, 0]}
                placement='bottom'
                render={renderItems}

            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1665824400&x-signature=1FNOh0BK2%2Bz%2Bpvyw3rOTeOlUt70%3D'}
                        alt=''
                    />

                    <div className={cx('item-info')} >
                        <div className={cx('nickname')} >
                            <h4 className={cx('name')} >TheANHThe9</h4>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <p className={cx('username')} >Theanhthe9</p>
                    </div>
                </div >
            </Tippy >
        </div>
    )
}



AccountItem.propTypes = {}
export default AccountItem