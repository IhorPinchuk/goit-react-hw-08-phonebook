import { NavLink } from "react-router-dom";

const HomePageNavigation = () => {
    return (
        <nav>
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"login"}>
                Log In
            </NavLink>
            <NavLink to={"register"}>
                Sign Up
            </NavLink>            
        </nav>
    )
}

export default HomePageNavigation;