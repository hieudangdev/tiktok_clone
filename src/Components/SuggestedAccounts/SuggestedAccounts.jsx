import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as SuggestedServices from '~/Services/SuggestedAcounts';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, moreBtn, page, moreBtn_less, items, itemsMore }) {
   const [ismoreBtn, setismoreBtn] = useState(false);
   const [itemsShow, setitemShow] = useState(items);
   const [suggests, setsuggests] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         const result = await SuggestedServices.Suggest(page, itemsMore);
         setsuggests(result);
      };
      fetchAPI();
   }, []);

   return (
      <div className={cx('wrapper')}>
         <p className={cx('title')}>{title}</p>
         {suggests.map((suggest, index) => {
            if (index < itemsShow) {
               return <AccountItem key={suggest.id} data={suggest} />;
            } else {
               return;
            }
         })}
         {ismoreBtn ? (
            <div
               className={cx('more-btn')}
               onClick={() => {
                  setismoreBtn(false);
                  return setitemShow(items);
               }}
            >
               {moreBtn_less}
            </div>
         ) : (
            <div
               className={cx('more-btn')}
               onClick={() => {
                  setismoreBtn(true);
                  return setitemShow(itemsMore);
               }}
            >
               {moreBtn}
            </div>
         )}
      </div>
   );
}

SuggestedAccounts.propTypes = {
   title: PropTypes.string.isRequired,
   page: PropTypes.string.isRequired,
   moreBtn: PropTypes.string.isRequired,
   moreBtn_less: PropTypes.string.isRequired,
   items: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
