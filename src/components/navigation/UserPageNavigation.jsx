import { dellToken } from "components/services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "redux/auth/authThunks";
import { authSelector } from "redux/auth/selectors";
import { StyledBtn, StyledDiv } from "./styled/userPageNavigation/styled";

const UserPageNavigation = () => {
  const { profile } = useSelector(authSelector)    
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(logOutThunk());
    dellToken();
  }

    return (
    <StyledDiv>
      {profile && <p>
                Welcome, <span>{profile.name }</span>
      </p>}
      <StyledBtn
                type="button"
        onClick={handleChange }        
      >
        Logout        
      </StyledBtn>
    </StyledDiv>
)
}

export default UserPageNavigation;