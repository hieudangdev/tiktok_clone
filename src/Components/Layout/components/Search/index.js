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

const cx = classNames.bind(styles)

function Search() {



    const [Searchresult, setSearchresult] = useState([])
    const [SearchValue, setSearchvalue] = useState('')
    const [ShowResult, setShowresult] = useState(true)
    const [loading, setloading] = useState(false)


    const inputRef = useRef()

    //localtest
    useEffect(() => {
        if (!SearchValue.trim()) {
            setSearchresult([])
            return
        }
        setloading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(SearchValue)}& type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchresult(res.data)
                setloading(false)
            })
            .catch(() => (
                setloading(false)
            ))
    }, [SearchValue])


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