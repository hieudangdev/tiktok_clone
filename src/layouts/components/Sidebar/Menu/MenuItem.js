import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => cx('Menu-item', { active: nav.isActive })}>
            {icon}
            <span className={cx('title')} > {title}</span >
        </NavLink >

    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}
export default MenuItem
