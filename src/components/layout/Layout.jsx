import Navigation from "components/navigation/Navigation";
import { logOut, setToken } from "components/services/authApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getProfileThunk } from "redux/auth/authThunks";
import { authSelector } from "redux/auth/selectors";

const Layout = () => {
    const { token, profile } = useSelector(authSelector)   
    // console.log('token :>> ', token);
    const dispatch = useDispatch()

    useEffect(() => {
        if (token && !profile) {
            setToken(token)
            dispatch(getProfileThunk())
        }
}, [dispatch, profile, token])

    return (
        <>
            <header>
            <Navigation />
        </header>
        <main>
                <Outlet />
        </main>
        </>
        
)
}

export default Layout;