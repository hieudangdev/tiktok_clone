
import classNames from "classnames/bind"
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless"
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import MenuItem from "./MenuItem"
import HeaderMenu from "./HeaderMenu"
import { useContext, useEffect, useState } from "react"

import PropTypes from 'prop-types'
import { ModalContext } from "~/Components/Modal"

//validation
const cx = classNames.bind(styles)

function Menu({ children, items, onChange, User, islogin, hideOnClick = false }) {
    const context = useContext(ModalContext)
    const [History, setHistory] = useState([{ data: items }])

    useEffect(() => {
        context.islogin ? setHistory([{ data: User }]) : setHistory([{ data: items }])
    }, [context.islogin, User, items])
    const current = History[History.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onclick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {

        setHistory((prev) => prev.slice(0, prev.length - 1))

    }
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {
                    History.length > 1 &&
                    <HeaderMenu
                        title={current.title}
                        onBack={handleBack}
                    />
                }
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }
    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 400]}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy >)
}

Menu.propTypes = {

    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool
}


export default Menu