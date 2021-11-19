import PropTypes from "prop-types";
import "./modeSwitch.scss";
import Option from "./Option";

const ModeSwitch = ({firstLabel, secondLabel, selectedLabel, onChange}) => {
    return (
        <div className={"mode-switch"}>
            <Option label={firstLabel} isSelected={selectedLabel === firstLabel} onChange={onChange}/>
            <Option label={secondLabel} isSelected={selectedLabel === secondLabel} onChange={onChange}/>
        </div>
    );
};

ModeSwitch.propTypes = {
    firstLabel: PropTypes.string.isRequired,
    secondLabel: PropTypes.string.isRequired,
    selectedLabel: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ModeSwitch;