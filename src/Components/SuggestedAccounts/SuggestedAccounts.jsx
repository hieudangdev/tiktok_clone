import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AcountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ label, more }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         <AcountItem />
         <AcountItem />
         <AcountItem />
         <AcountItem />

         <p className={cx('more-btn')}> {more}</p>
      </div>
   );
}

SuggestedAccounts.propTypes = {
   label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
