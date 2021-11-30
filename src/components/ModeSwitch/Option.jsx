import PropTypes from "prop-types";
import "./modeSwitch.scss";

const Option = ({onChange, label, isSelected}) => {
    return (
        <div className={"option"}>
            <input type="radio" onChange={() => onChange(label)} checked={isSelected}/>
            <span
                onClick={() => onChange(label)}
                className={`option-label${isSelected ? " is-selected" : ""}`}
            >
                {label}
            </span>
        </div>
    );
};

Option.propTypes = {
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Option;