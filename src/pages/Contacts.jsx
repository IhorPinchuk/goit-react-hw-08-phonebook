import Phonebook from "components/phonebook/Phonebook";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "redux/auth/selectors";

const Contacts = () => {
const {token: isAuth} = useSelector(authSelector)
    const navigate = useNavigate();

    useEffect(() => {
!isAuth && navigate('/')
    }, [isAuth, navigate])

    return (
    <Phonebook />
)
}

export default Contacts;