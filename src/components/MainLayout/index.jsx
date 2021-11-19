import PropTypes from "prop-types";
import "./mainLayout.scss";
import Header from "../Header";

const MainLayout = ({children, showHeader}) => {
    return (
        <>
            <div className={"header"}>
                {
                    showHeader && <Header/>
                }
            </div>
            <div className={"main-content"}>
                {children}
            </div>
        </>
    );
};

MainLayout.propTypes = {
    showHeader: PropTypes.bool
};

MainLayout.defaultProps = {
    showHeader: true
};

export default MainLayout;