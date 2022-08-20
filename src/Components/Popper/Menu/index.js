
import classNames from "classnames/bind"
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless"
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import MenuItem from "./MenuItem"
import HeaderMenu from "./Header"
import { useState } from "react"


//validation
const cx = classNames.bind(styles)



function Menu({ children, items }) {
    const [History, setHistory] = useState([{ data: items }])

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
                        }
                    }}
                />
            )
        })
    }
    return (
        <Tippy
            interactive
            visible
            delay={[0, 400]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {History.length > 1 && <HeaderMenu
                            title='Languages'
                            onBack={() => {
                                setHistory((prev) => prev.slice(0, prev.length - 1))
                            }}

                        />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy >)
}

export default Menu