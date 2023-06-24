import Navigation from "components/navigation/Navigation";
import { setToken } from "components/services/authApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { resetToken } from "redux/auth/authSlice";
import { getProfileThunk, logOutThunk } from "redux/auth/authThunks";
import { authSelector } from "redux/auth/selectors";

const Layout = () => {
    const { token, profile } = useSelector(authSelector)   
    // console.log('token :>> ', token);
    const dispatch = useDispatch()

    useEffect(() => {
        if (token && !profile) {
            setToken(token)
            dispatch(getProfileThunk()).unwrap().catch(() => dispatch(logOutThunk()).unwrap().catch(() => dispatch(resetToken())))
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