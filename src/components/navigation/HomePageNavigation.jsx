import { StyledLink, StyledNav } from './styled/homePageNavigation/styled';

const HomePageNavigation = () => {
  return (
    <StyledNav>
      <div>
        <StyledLink to={'/'}>Home</StyledLink>
      </div>
      <div>
        <StyledLink to={'login'}>Log In</StyledLink>
        <StyledLink to={'register'}>Sign Up</StyledLink>
      </div>
    </StyledNav>
  );
};

export default HomePageNavigation;
