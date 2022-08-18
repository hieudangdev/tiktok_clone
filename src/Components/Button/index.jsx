import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   onClick,
   children,
   disabled,
   passProps,

   // type button
   primary = false,
   outline = false,
   rounded = false,
   text = false,
   //size button
   small = false,
   large = false,
   color = '',
}) {
   let Comp = 'Button';

   const props = {
      onClick,
      ...passProps,
   };
   if (to) {
      Comp = Link;
      props.to = to;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   //disabled remove props onClick

   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   const classes = cx('wrapper', {
      outline,
      small,
      text,
      large,
      primary,
      disabled,
      rounded,
   });

   return (
      <Comp {...props} style={{ borderColor: color }} className={classes}>
         <span>{children}</span>
      </Comp>
   );
}
export default Button;
