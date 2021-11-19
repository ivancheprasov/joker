import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./formFooterLink.scss";

const FormFooterLink = ({to, linkText, userMessage}) => {
    return (
        <div className={"form-footer"}>
            <span>{userMessage}</span>
            <Link to={to}>
                <span>{linkText}</span>
            </Link>
        </div>
    );
};

FormFooterLink.propTypes = {
    to: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    userMessage: PropTypes.string.isRequired
};

export default FormFooterLink;