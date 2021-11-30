import {Select, InputLabel, MenuItem, ListSubheader} from "@mui/material";
import PropTypes from "prop-types";
import "./customSelect.scss";

const CustomSelect = ({options, label, className, placeholder, hasCategories, ...formik}) => {
    const wrapperClassName = `${className || ""} ${
        formik.form.touched[formik.field.name] && formik.form.errors[formik.field.name] ?
            "select-wrapper select-error"
            :
            "select-wrapper"
    }`;
    return (
        <div className={wrapperClassName}>
            <InputLabel id={"label"}>{label}</InputLabel>
            <Select
                labelId={"label"}
                name={formik.field.name}
                value={formik.field.value}
                onChange={formik.field.onChange}
                displayEmpty
            >
                <MenuItem disabled value={""}>
                    <em>{placeholder}</em>
                </MenuItem>
                {
                    hasCategories ?
                        options.map((optionCategory, key) => (
                            [
                                <ListSubheader key={key}>
                                    {optionCategory.type}
                                </ListSubheader>,
                                optionCategory.values.map((option) => (
                                    <MenuItem
                                        key={key}
                                        value={option.id}
                                    >
                                        {option.name}
                                    </MenuItem>
                                ))
                            ]
                        ))
                        :
                        options.map((option, key) => (
                            <MenuItem
                                key={key}
                                value={option.id}
                            >
                                {option.name}
                            </MenuItem>
                        ))
                }
            </Select>
        </div>
    );
};

CustomSelect.propTypes = {
    hasCategories: PropTypes.bool,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string
};

CustomSelect.defaultProps = {
    hasCategories: false
};

export default CustomSelect;