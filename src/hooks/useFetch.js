import React, { useEffect } from "react"
import { data } from "react-router-dom"


export const useFetch = (url, method= 'get') => {
    const [response, setResponse] = React.useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}