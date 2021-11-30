import "./textArea.scss";

const TextArea = ({field, form, placeholder, className, readOnly, ...props}) => {
    const inputClassName = `${className} ${
        form.touched[field.name] && form.errors[field.name] ?
            "text-area text-area-error"
            :
            "text-area"
    }`;
    return (
        <textarea
            {...field}
            {...props}
            readOnly={readOnly}
            wrap={"soft"}
            placeholder={placeholder}
            className={inputClassName}
            autoComplete={"new-password"}
        />
    );
};

export default TextArea;