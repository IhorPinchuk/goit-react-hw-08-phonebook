import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "redux/auth/authThunks";
import { authSelector } from "redux/auth/selectors";

const UserPageNavigation = () => {
    const { profile } = useSelector(authSelector)  
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(logOutThunk())
  }

    return (
    <div>
      <p>
                {/* Welcome, <span>{profile.name }</span> */}
      </p>
      <button
                type="button"
        onClick={handleChange }        
      >
        Logout        
      </button>
    </div>
)
}

export default UserPageNavigation;