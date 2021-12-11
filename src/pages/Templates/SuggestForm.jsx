import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import TextArea from "../../components/TextArea";
import {useDispatch} from "react-redux";
import "../../app.scss";
import {
    isShowingSuggestedCategories,
    resetAddSuccess,
    setNewTemplateBody,
    suggestCategories
} from "../../redux/templatesSlice";

const SuggestForm = () => {
    const dispatch = useDispatch();
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
                    dispatch(resetAddSuccess());
                    dispatch(setNewTemplateBody(values.input));
                    dispatch(isShowingSuggestedCategories(true));
                    dispatch(suggestCategories({
                        input: values.input
                    }));
                }
            }
        >
            {() => (
                <Form className={"common-form"}>
                    <Field
                        name={"input"}
                        className={"common-form_input"}
                        placeholder={"An original joke that will be used as a template"}
                        component={TextArea}
                    />
                    <button
                        className={"common-form_button"}
                        type={"submit"}
                    >
                        Suggest Categories
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default SuggestForm;