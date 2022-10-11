
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Images from '../Image/Image'
import styles from './AcountItem.module.scss'
import PropTypes from 'prop-types'


const cx = classNames.bind(styles)

function AcountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images src={data.avatar} alt={data.nickname} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    }
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>

        </Link>
    )
}

AcountItem.propTypes = {
    data: PropTypes.object.isRequired,
}



export default AcountItem