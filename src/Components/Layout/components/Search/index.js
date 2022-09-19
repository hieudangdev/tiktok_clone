import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { useEffect, useState } from 'react'

import TippyHeadless from '@tippyjs/react/headless'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import AcountItem from '~/Components/AcountItem'
import { SearchIcon } from '~/Components/Icons'

const cx = classNames.bind(styles)

function Search() {

    const [Searchresult, setSearchresult] = useState([])
    const [SearchValue, setSearchvalue] = useState('')
    //localtest
    useEffect(() => {
        setTimeout(() => {
            setSearchresult([1, 1])
        }, 0)
    }, [])


    return (
        <div>

            <TippyHeadless
                visible={Searchresult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AcountItem />
                            <AcountItem />
                            <AcountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        value={SearchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => setSearchvalue(e.target.value)}
                    />

                    {!!SearchValue &&
                        <button className={cx('clear')}>
                            <Icon icon={faCircleXmark} />
                        </button>
                    }

                    <Icon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>

        </div>
    )
}
export default Search 