import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation
} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserDetail from './UserDetail'
import LoginForm from './Login'

const RequireAuth = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    React.useEffect(() => {
        const username = sessionStorage.getItem('username')
        if (username) {
            setIsLoggedIn(true)
        } else {
            navigate('/login', { state: { from: location }, replace: true })
        }
    }, [])

    return isLoggedIn && children
}

const GitHubPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route
                    path="/list"
                    element={
                        <RequireAuth>
                            <Users />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/list/:login"
                    element={
                        <RequireAuth>
                            <UserDetail />
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default GitHubPage
