import classNames from 'classnames/bind'
import styles from './Images.module.scss'
import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)


const Image = forwardRef(({ src, className, alt, cusFallback = images.noImage, ...props }, ref) => {

  const [fallback, setfallback] = useState('')

  const handleError = () => {
    return (
      setfallback(cusFallback)
    )
  }
  return (
    <img ref={ref} className={cx('wrapper', className)} alt={alt} src={fallback || src} {...props} onError={handleError} />
  )
})
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.string,
  fallback: PropTypes.string,
}
export default Image