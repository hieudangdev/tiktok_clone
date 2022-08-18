import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   onClick,
   children,
   passProps,
   //styles,type button
   primary = false,
   outline = false,
   small = false,
   large = false,
   text = false,
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

   const classes = cx('wrapper', {
      primary,
      outline,
      small,
      text,
      large,
   });

   return (
      <Comp {...props} style={{ borderColor: color }} className={classes}>
         <span>{children}</span>
      </Comp>
   );
}
export default Button;
