import { Loading } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants'
import "./OAuth2Redirect.scss"

const OAuth2Redirect = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [searchParam, setSearchParams] = useSearchParams()

    useEffect(() => {
        const accessToken = searchParam.get(ACCESS_TOKEN)
        const refreshToken = searchParam.get(REFRESH_TOKEN)
        if (accessToken && refreshToken) {
            localStorage.setItem(ACCESS_TOKEN, accessToken)
            localStorage.setItem(REFRESH_TOKEN, refreshToken)
            setIsLoading(false)
        }
    }, [])

  return (
    <div className="oauth2redirect">
        {isLoading ? (
            <div className="d-flex justify-content-center align-items-center oauth2redirect-loading">
                <Loading />
            </div>
        ): (
            <Navigate to={"/"} />
        )}
    </div>
  )
}

export default OAuth2Redirect