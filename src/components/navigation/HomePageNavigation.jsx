import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomePageNavigation = () => {
    return (
        
        <nav>
            
            <NavLink to={"/"}>
                <Typography variant="h5" color="#ffffff"  component={"span"}>
                    Home
                    </Typography>
                </NavLink>
                
            <NavLink to={"login"}>
                <Typography variant="h5" color="#ffffff"  component={"span"}>
                    Log In
                    </Typography>
            </NavLink>
            <NavLink to={"register"}>
                <Typography variant="h5" color="#ffffff" component={"span"} >
                    Sign Up
                    </Typography>
            </NavLink>            
            </nav>
            
    )
}

export default HomePageNavigation;