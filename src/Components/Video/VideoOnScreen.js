import { useEffect, useState, useMemo } from "react"
export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = (entries) => {
        const [entry] = entries //const entry = entries[0]
        console.log(entries)
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