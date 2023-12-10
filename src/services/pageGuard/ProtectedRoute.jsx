import React, { useEffect } from 'react'
import { useAuth } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const {user} = useAuth()
    const navigation = useNavigate()

    useEffect(() => {
        if(!sessionStorage.user_id) {
            navigation("/")
        }
    }, [navigation, user])

    return(
        <>
            {user ? children : null}
        </>
    )
}

export default ProtectedRoute
