
import AcountItem from "~/Components/AcountItem"

import { useMemo } from "react"



function SearchResult({ searchInput }) {
    return (
        useMemo(() => (
            searchInput.map((result) => (
                <AcountItem key={result.id} data={result} />
            ))
        ), [searchInput])
    )
}

export default SearchResult