import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedTab} from "../../redux/headerSlice";
import "./headerTabs.scss";
import {useNavigate} from "react-router";

const HeaderTab = ({label, path}) => {
    const {selectedTab} = useSelector(state => state.header);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSelected = selectedTab === label;
    return (
        <div
            className={`header-tab${isSelected ? " is-selected" : ""}`}
            onClick={() => {
                dispatch(setSelectedTab(label));
                navigate(path);
            }}
        >
            <span>{label}</span>
        </div>
    );
};

HeaderTab.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default HeaderTab;