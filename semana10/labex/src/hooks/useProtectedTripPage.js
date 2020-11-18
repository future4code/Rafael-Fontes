import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export function useProtectedTripPage() {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            history.push("/login")
        } else {
            history.push("/trip")
        }

    }, [history])

}
