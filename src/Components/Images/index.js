import classNames from 'classnames/bind'
import styles from './Images.module.scss'
import { useRef, forwardRef, useState } from 'react'
import images from '~/assets/images'

const cx = classNames.bind(styles)


function Images({ src, className, cusFallback = images.noImage, ...props }, ref) {

  const [fallback, setfallback] = useState('')

  const handleError = () => {
    return (
      setfallback(cusFallback)
    )
  }
  return (
    <img ref={ref} className={cx('wrapper', className)} src={fallback || src} {...props} onError={handleError} />
  )
}
export default forwardRef(Images)