import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "components/navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { resetToken } from "redux/auth/authSlice";
import { getProfileThunk, logOutThunk } from "redux/auth/authThunks";
import { authSelector } from "redux/auth/selectors";
import { setToken } from "components/services/authApi";

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
            {/* <header> */}
            
            <Navigation />
        {/* </header> */}
            <main>
                <Suspense>
                    <Outlet />
                    </Suspense>
        </main>
        </>
        
)
}

export default Layout;