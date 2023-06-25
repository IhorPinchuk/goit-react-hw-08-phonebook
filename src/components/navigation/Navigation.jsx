import { useSelector } from "react-redux";
import HomePageNavigation from "./HomePageNavigation";
import UserPageNavigation from "./UserPageNavigation";
import { authSelector } from "redux/auth/selectors";
import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";


const Navigation = () => {
    const { token: isAuth } = useSelector(authSelector)

    // const theme = createTheme(
    //     {
    //         text: {
    //             primary: '#173A5E',
    //             secondary: '#ffffff',
    //         }
    //     }
    // );
    
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
             {/* <CssBaseline /> */}
            <AppBar position='static' width='100%'>
                <Toolbar>
                   
                    <Typography  color="inherit" component="a">
             {!isAuth ? <HomePageNavigation /> :
                        <UserPageNavigation />}
                    </Typography>
                </Toolbar>
                
                </AppBar>
            {/* </ThemeProvider> */}
            



           
            
        </>
)
}

export default Navigation;

//  <AppBar position="static">
//   <Toolbar variant="dense">
//     <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//       {/* <MenuIcon /> */}
//     </IconButton>
//     <Typography variant="h6" color="inherit" component="div">
//       Photos
//     </Typography>
//   </Toolbar>
//             </AppBar>


//  <ThemeProvider theme={defaultTheme}>
//         <CssBaseline />
//         <AppBar
//           position='fixed'
//           width='100%'>
//           <Toolbar>
//             <AccountBoxIcon sx={{ mr: 2 }} />
//             <Typography variant="h6" color="inherit" noWrap>
//               {user && <NavLink style={{ color: 'inherit', textDecoration: 'none', }} to='/profile'>{user.name}</NavLink>}
//               {!user && <NavLink style={{ color: 'inherit', textDecoration: 'none', }} to='/register'>Sign up</NavLink>}
//             </Typography>
//           </Toolbar>
//         </AppBar>
    //   </ThemeProvider>