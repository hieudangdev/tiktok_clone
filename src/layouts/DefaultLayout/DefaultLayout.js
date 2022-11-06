
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import ModalForm from '~/Components/Modal/ModalForm'
import { useContext } from 'react'
import { ModalContext } from '~/Components/Modal'


const cx = classNames.bind(styles)


function DefaultLayout({ children }) {
   const context = useContext(ModalContext)
   return (
      <div className={cx('wrapper')}>
         <Header />

         <div className={cx('container')}>
            <Sidebar />

            <div className={cx('content')}>
               {children}
            </div>

         </div>
         {context.active && <ModalForm onHide={context.handleHideModal} />}
      </div>
   )
}

DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default DefaultLayout