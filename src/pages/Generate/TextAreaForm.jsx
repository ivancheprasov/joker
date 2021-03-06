import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import ModeSwitch from "../../components/ModeSwitch";
import {generate, isShowingResult, setSelectedOption} from "../../redux/generateFormSlice";
import {useDispatch, useSelector} from "react-redux";
import "../../app.scss";
import TextArea from "../../components/TextArea";

const TextAreaForm = () => {
    const dispatch = useDispatch();
    const {selectedOption} = useSelector(state => state.generateForm);
    return (
        <Formik
            initialValues={
                {
                    input: ""
                }
            }
            validationSchema={
                Yup.object().shape({
                    input: Yup.string().required()
                })}
            onSubmit={
                (values) => {
                    dispatch(isShowingResult(true));
                    dispatch(generate({
                        mode: "text",
                        input: values.input
                    }))
                }
            }
        >
            {({isSubmitting}) => (
                <Form className={"common-form"}>
                    <Field
                        name={"input"}
                        className={"common-form_input"}
                        placeholder={"The start of the new joke"}
                        component={TextArea}
                    />
                    <ModeSwitch
                        firstLabel={"use text input"}
                        secondLabel={"use template"}
                        selectedLabel={selectedOption}
                        onChange={label => dispatch(setSelectedOption(label))}
                    />
                    <button
                        className={"common-form_button"}
                        type={"submit"}
                        disabled={isSubmitting}
                    >
                        Generate
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default TextAreaForm;