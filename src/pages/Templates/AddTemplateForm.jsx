import * as Yup from "yup";
import {addTemplate, isShowingSuggestedCategories} from "../../redux/templatesSlice";
import {Field, Form, Formik} from "formik";
import TextArea from "../../components/TextArea";
import "../../app.scss";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import CustomSelect from "../../components/CustomSelect";
import ModeSwitch from "../../components/ModeSwitch";
import "./templates.scss";
import CustomTextField from "../../components/CustomTextField";

const AddTemplateForm = () => {
    const dispatch = useDispatch();
    const {
        isAddSuccessful,
        newTemplateBody,
        suggestedCategories,
    } = useSelector(state => state.templates);
    const {categories} = useSelector(state => state.categories);
    const [selectedType, setSelectedType] = useState("private");
    const {isSuperuser} = useSelector(state => state.user);
    useEffect(() => {
        if (isAddSuccessful) dispatch(isShowingSuggestedCategories(false));
    }, [isAddSuccessful]);
    return (
        <Formik
            initialValues={
                {
                    input: newTemplateBody,
                    name: "",
                    templateCategories: suggestedCategories
                }
            }
            validationSchema={
                Yup.object().shape({
                    input: Yup.string().required(),
                    name: Yup.string().required(),
                    templateCategories: Yup.array().min(1).test(
                        "improperCategories", selected =>
                            selectedType === "private" || !selected.some(categoryId =>
                                categories[0].values.some(category =>
                                    category.id === categoryId
                                )
                            )
                    ).required()
                })}
            onSubmit={
                (values) => {
                    dispatch(addTemplate({
                        input: values.input,
                        name: values.name,
                        categories: values.templateCategories,
                        type: selectedType
                    }));
                }
            }
        >
            {() => (
                <Form className={"common-form"}>
                    <Field
                        name={"name"}
                        label={"Name"}
                        component={CustomTextField}
                    />
                    <Field
                        name={"input"}
                        className={"common-form_input"}
                        placeholder={"An original joke that will be used as a template"}
                        component={TextArea}
                    />
                    <Field
                        name={"templateCategories"}
                        className={"common-form_select"}
                        label={"Template Categories"}
                        placeholder={"Select template categories"}
                        options={categories}
                        hasCategories={true}
                        isMultiple={true}
                        component={CustomSelect}
                    />
                    {
                        isSuperuser &&
                        <>
                            <div className={"template-warning-wrapper"}>
                                <span>
                                    WARNING: global templates are only compatible with global categories
                                </span>
                            </div>
                            <ModeSwitch
                                firstLabel={"private"}
                                secondLabel={"global"}
                                selectedLabel={selectedType}
                                onChange={label => setSelectedType(label)}
                            />
                        </>
                    }
                    <button
                        className={"common-form_button"}
                        type={"submit"}
                    >
                        Add Template
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddTemplateForm;