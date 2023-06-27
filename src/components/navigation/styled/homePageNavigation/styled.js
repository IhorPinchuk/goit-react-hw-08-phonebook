import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const theme = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '1200px',
  margin: '0 auto',
};

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 12px;

  &:hover,
  &:focus {
    color: rgb(51, 255, 0);
  }

  &.active {
    color: #09eee6;
  }
`;

export const StyledNav = styled.nav`
  display: ${() => theme.display};
  justify-content: ${() => theme.justifyContent};
  width: ${() => theme.width}
  margin: ${() => theme.margin}
`;
