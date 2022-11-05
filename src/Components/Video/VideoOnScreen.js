import { useEffect, useState, useMemo } from "react"

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}
export const useElementOnScreen = (targetRef, option) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = (entries) => {
        const [entry] = entries //const entry = entries[0]  
        setIsVisible(entry.isIntersecting)
    }
    //useMemo tránh render lấy lại option mà chỉ render khi option tha đổi 

    const optionsMemo = useMemo(() => {
        return options
    }, [options])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])
    return isVisibile
}