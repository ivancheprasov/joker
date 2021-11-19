import "./formLayout.scss";
import PropTypes from "prop-types";

const FormLayout = ({children, title}) => {
    return (
      <div className={"form-wrapper"}>
          <div className={"form"}>
              <div className={"form-header"}>
                  <span>{title}</span>
              </div>
              <div className={"form-body"}>
                  {children}
              </div>
          </div>
      </div>
    );
};

FormLayout.propTypes = {
  title: PropTypes.string.isRequired
};

export default FormLayout;