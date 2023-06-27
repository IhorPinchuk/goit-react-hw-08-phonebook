import { useSelector } from 'react-redux';
import HomePageNavigation from './HomePageNavigation';
import UserPageNavigation from './UserPageNavigation';
import { authSelector } from 'redux/auth/selectors';
import { AppBar, Toolbar, } from '@mui/material';



const Navigation = () => {
  const { token: isAuth } = useSelector(authSelector);

  return (
    <>     
        <AppBar position="static" width="100%" component="header">
          <Toolbar>
            {!isAuth ? <HomePageNavigation /> : <UserPageNavigation />}
          </Toolbar>
        </AppBar>      
    </>
  );
};

export default Navigation;
