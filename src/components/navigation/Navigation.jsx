import { useSelector } from "react-redux";
import HomePageNavigation from "./HomePageNavigation";
import UserPageNavigation from "./UserPageNavigation";
import { authSelector } from "redux/auth/selectors";

const Navigation = () => {
    const { token: isAuth } = useSelector(authSelector)
    
    return (
        <>
             {!isAuth ? <HomePageNavigation /> :
            <UserPageNavigation />}
        </>
)
}

export default Navigation;