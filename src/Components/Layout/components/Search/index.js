import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import { useEffect, useState, useRef } from 'react'

import TippyHeadless from '@tippyjs/react/headless'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Wrapper as PopperWrapper } from '~/Components/Popper'
import AcountItem from '~/Components/AcountItem'
import { SearchIcon } from '~/Components/Icons'
import { useDebounce } from '~/Hooks'
import * as searchServices from '~/ApiServices/searchServices'

const cx = classNames.bind(styles)

function Search() {

    const [Searchresult, setSearchresult] = useState([])
    const [SearchValue, setSearchvalue] = useState('')
    const [ShowResult, setShowresult] = useState(true)
    const [loading, setloading] = useState(false)


    const debounced = useDebounce(SearchValue, 500)
    const inputRef = useRef()

    //localtest
    useEffect(() => {
        if (!SearchValue.trim()) {
            setSearchresult([])
            return
        }
        setloading(true)

        const fetchApi = async () => {
            setloading(true)
            const result = await searchServices.search(debounced)
            console.log('res', result)
            // setSearchresult(result)
            setloading(false)
        }
        fetchApi()

    }, [debounced])


    const handleClear = () => {
        inputRef.current.focus()
        setSearchvalue('')
        setSearchresult([])
    }


    const handlehideResults = () => {

        return setShowresult(false)
    }

    return (
        <div>

            <TippyHeadless
                visible={ShowResult && Searchresult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {Searchresult.map((result) => (
                                <AcountItem key={result.id} data={result} />
                            ))}


                        </PopperWrapper>
                    </div>
                )}

                onClickOutside={handlehideResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={SearchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => {
                            setSearchvalue(e.target.value)
                        }}
                        onFocus={() => setShowresult(true)}
                    />

                    {!!SearchValue && !loading &&
                        <button className={cx('clear')}
                            onClick={handleClear}
                        >
                            <Icon icon={faCircleXmark} />
                        </button>
                    }

                    {loading && <Icon className={cx('loading')} icon={faSpinner} />}


                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>

        </div>
    )
}
export default Search 