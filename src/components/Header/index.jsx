import "./header.scss";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/userSlice";
import HeaderTabs from "../HeaderTabs";

const Header = (props) => {
    const {username} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <div className={"header-content"}>
            <div className={"logout-button-wrapper"}>
                <span className={"username"}>{username}</span>
                <button className={"logout-button"} onClick={() => dispatch(logout())}>
                    Logout
                </button>
            </div>
            <HeaderTabs/>
        </div>
    );
};

export default Header;