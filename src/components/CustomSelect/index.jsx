import {Select, InputLabel, MenuItem, ListSubheader} from "@mui/material";
import PropTypes from "prop-types";
import "./customSelect.scss";
import _ from "lodash";

const CustomSelect = ({options, label, className, placeholder, hasCategories, isMultiple,...formik}) => {
    const wrapperClassName = `${className || ""} ${
        formik.form.touched[formik.field.name] && formik.form.errors[formik.field.name] ?
            "select-wrapper select-error"
            :
            "select-wrapper"
    }`;
    const isEmpty = isMultiple ? _.isEmpty(formik.field.value) : formik.field.value === "";
    return (
        <div className={wrapperClassName}>
            <InputLabel id={"label"}>{label}</InputLabel>
            <Select
                labelId={"label"}
                name={formik.field.name}
                value={formik.field.value || ""}
                multiple={isMultiple}
                onChange={formik.field.onChange}
                displayEmpty
                renderValue={
                    isEmpty ? () => <em>{placeholder}</em> : undefined
                }
            >
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
    className: PropTypes.string,
    isMultiple: PropTypes.bool
};

CustomSelect.defaultProps = {
    hasCategories: false,
    isMultiple: false
};

export default CustomSelect;