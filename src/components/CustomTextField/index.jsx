import {TextField} from "@mui/material";
import PropTypes from "prop-types";
import "./customTextField.scss";

const CustomTextField = ({label, className, ...formik}) => {
    const wrapperClassName = `${className || ""} ${
        formik.form.touched[formik.field.name] && formik.form.errors[formik.field.name] ?
            "text-field-wrapper text-field-error"
            :
            "text-field-wrapper"
    }`;
    return (
        <div className={wrapperClassName}>
            <TextField
                label={label}
                variant={"outlined"}
                name={formik.field.name}
                value={formik.field.value}
                onChange={formik.field.onChange}
            />
        </div>
    );
};

CustomTextField.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default CustomTextField;