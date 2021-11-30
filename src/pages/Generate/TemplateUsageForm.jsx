import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import ModeSwitch from "../../components/ModeSwitch";
import {generate, isShowingResult, setSelectedOption} from "../../redux/generateFormSlice";
import {useDispatch, useSelector} from "react-redux";
import CustomSelect from "../../components/CustomSelect";
import Spinner from "../../components/Spinner";
import "../../app.scss";

const TemplateUsageForm = () => {
    const dispatch = useDispatch();
    const {selectedOption} = useSelector(state => state.generateForm);
    const {categories, isLoaded} = useSelector(state => state.categories);
    return (
        <Formik
            initialValues={
                {
                    category: ""
                }
            }
            validationSchema={
                Yup.object().shape({
                    category: Yup.string().required()
                })}
            onSubmit={
                (values) => {
                    dispatch(isShowingResult(true));
                    dispatch(generate({
                        mode: "template",
                        category: values.category
                    }))
                }
            }
        >
            {({isSubmitting}) => (
                <Form className={"common-form"}>
                    {
                        isLoaded ?
                            <Field
                                name={"category"}
                                className={"common-form_select"}
                                label={"Category"}
                                placeholder={"Select a category"}
                                options={categories}
                                hasCategories={true}
                                component={CustomSelect}
                            />
                            :
                            <Spinner/>
                    }
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

export default TemplateUsageForm;