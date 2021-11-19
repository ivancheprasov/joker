import "./errorMessage.scss";
import {useSelector} from "react-redux";

const ErrorMessage = (props) => {
    const message = useSelector(state => state.user.errorMessage);
    return (
        <div className={`error-message-wrapper`}>
            <span className={"error-message"}>{message || <br/>}</span>
        </div>
    );
};

export default ErrorMessage;
