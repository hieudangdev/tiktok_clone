import Button from "~/Components/Button"
import classNames from "classnames/bind"
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)


function MenuItem({ data, onclick }) {
  const clasess = cx('menu-item', {
    separate: data.separate,
  })
  return (
    <Button className={clasess} leftIcon={data.icon} to={data.to} onClick={onclick} >
      {data.title}
    </Button>
  )
}

export default MenuItem