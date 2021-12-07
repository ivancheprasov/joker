import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import TextArea from "../../components/TextArea";
import ModeSwitch from "../../components/ModeSwitch";
import {addCategory, resetAddSuccess} from "../../redux/categoriesSlice";
import CustomTextField from "../../components/CustomTextField";
import "../../app.scss";
import CustomSnackbar from "../../components/CustomSnackbar";

const Categories = () => {
    const [selectedType, setSelectedType] = useState("private");
    const {isSuperuser} = useSelector(state => state.user);
    const {isAddSuccessful, isAddPending} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetAddSuccess());
    }, []);
    return (
        <MainLayout>
            <FormLayout title={"Add a category"}>
                <Formik
                    initialValues={
                        {
                            name: "",
                            keyWords: ""
                        }
                    }
                    enableReinitialize={true}
                    validationSchema={
                        Yup.object().shape({
                            name: Yup.string().required(),
                            keyWords: Yup.string().required(),
                        })}
                    onSubmit={
                        (values) => {
                            dispatch(addCategory({
                                ...values,
                                type: selectedType
                            }))
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
                                name={"keyWords"}
                                className={"common-form_input"}
                                placeholder={"Enter all key words separated with commas\nExample: Bar, Bartender, Wine, ..."}
                                component={TextArea}
                            />
                            {
                                isSuperuser &&
                                <ModeSwitch
                                    firstLabel={"private"}
                                    secondLabel={"global"}
                                    selectedLabel={selectedType}
                                    onChange={label => setSelectedType(label)}
                                />
                            }
                            <button
                                className={"common-form_button"}
                                type={"submit"}
                                disabled={isAddPending}
                            >
                                Submit
                            </button>
                            <CustomSnackbar
                                isOpened={isAddSuccessful}
                                message={"A category has been added!"}
                            />
                        </Form>
                    )}
                </Formik>
            </FormLayout>
        </MainLayout>
    );
};

export default Categories;