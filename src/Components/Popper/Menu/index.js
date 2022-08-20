
import classNames from "classnames/bind"
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless"
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import MenuItem from "./MenuItem"


//validation
const cx = classNames.bind(styles)



function Menu({ children, items }) {

    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />)
    }
    return (
        <Tippy
            interactive

            delay={[0, 400]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}> {renderItems()} </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy >)
}

export default Menu