import { useState, createContext } from 'react'

const ModalContext = createContext()

function ModalProvider({ children }) {
    const [active, setActive] = useState(false)
    const [islogin, setislogin] = useState(false)

    const handleShowModal = () => {
        setActive(true)
    }

    const handleHideModal = () => {
        setActive(false)
    }

    const handlelogined = () => {
        setislogin(!islogin)

    }

    const value = {
        active,
        islogin,
        handleShowModal,
        handleHideModal,
        handlelogined,
    }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }