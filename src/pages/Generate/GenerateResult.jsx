import {useDispatch, useSelector} from "react-redux";
import {isShowingResult} from "../../redux/generateFormSlice";
import {Field, Form, Formik} from "formik";
import TextArea from "../../components/TextArea";
import "../../app.scss";

const GenerateResult = () => {
    const dispatch = useDispatch();
    const {result, usedTemplate} = useSelector(state => state.generateForm);
    return (
        <Formik
            initialValues={
                {
                    result,
                    usedTemplate
                }
            }
            onSubmit={
                () => dispatch(isShowingResult(false))
            }
        >
            {() => (
                <Form className={"common-form"}>
                    <span className={"common-form_span"}>
                        Generated joke
                    </span>
                    <Field
                        name={"result"}
                        className={"common-form_input"}
                        readOnly={true}
                        component={TextArea}
                    />
                    <span className={"common-form_span"}>
                        Original template
                    </span>
                    <Field
                        name={"usedTemplate"}
                        className={"common-form_input"}
                        readOnly={true}
                        component={TextArea}
                    />
                    <button
                        className={"common-form_button"}
                        type={"submit"}
                    >
                        Return
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default GenerateResult;