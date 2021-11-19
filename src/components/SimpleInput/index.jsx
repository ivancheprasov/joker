import "./simpleInput.scss";

const SimpleInput = ({field, form, type, placeholder, className, ...props}) => {
    const inputClassName = `${className} ${form.touched[field.name] && form.errors[field.name] ? "input input-error" : "input"}`;
    return (
        <input
            {...field}
            {...props}
            type={type}
            placeholder={placeholder}
            className={inputClassName}
            autoComplete={"new-password"}
        />
    );
};

export default SimpleInput;