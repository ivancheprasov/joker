import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import * as Yup from "yup";
import {generate, isShowingResult} from "../../redux/generateFormSlice";
import {Field, Form, Formik} from "formik";
import CustomSelect from "../../components/CustomSelect";
import Spinner from "../../components/Spinner";
import ModeSwitch from "../../components/ModeSwitch";
import {useState} from "react";
import TextArea from "../../components/TextArea";

const Templates = () => {
    const [selectedType, setSelectedType] = useState("private");
    const {isSuperuser} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <MainLayout>
            <FormLayout title={"Add a template"}>
                {/*<Formik*/}
                {/*    initialValues={*/}
                {/*        {*/}
                {/*            name: ""*/}
                {/*        }*/}
                {/*    }*/}
                {/*    validationSchema={*/}
                {/*        Yup.object().shape({*/}
                {/*            name: Yup.string().required()*/}
                {/*        })}*/}
                {/*    onSubmit={*/}
                {/*        (values) => {*/}
                {/*            dispatch(isShowingResult(true));*/}
                {/*            dispatch(generate({*/}
                {/*                mode: "template",*/}
                {/*                category: values.category,*/}
                {/*                type: selectedType*/}
                {/*            }))*/}
                {/*        }*/}
                {/*    }*/}
                {/*>*/}
                {/*    {({isSubmitting}) => (*/}
                {/*        <Form className={"generate-form"}>*/}
                {/*            {*/}
                {/*                isLoaded ?*/}
                {/*                    <Field*/}
                {/*                        name={"category"}*/}
                {/*                        className={"generate-form_select"}*/}
                {/*                        label={"Category"}*/}
                {/*                        placeholder={"Select a category"}*/}
                {/*                        options={categories}*/}
                {/*                        hasCategories={true}*/}
                {/*                        component={CustomSelect}*/}
                {/*                    />*/}
                {/*                    :*/}
                {/*                    <Spinner/>*/}
                {/*            }*/}
                {/*            <Field*/}
                {/*                name={"input"}*/}
                {/*                className={"generate-form_input"}*/}
                {/*                placeholder={"The start of the new joke"}*/}
                {/*                component={TextArea}*/}
                {/*            />*/}
                {/*            {*/}
                {/*                isSuperuser &&*/}
                {/*                <ModeSwitch*/}
                {/*                    firstLabel={"private"}*/}
                {/*                    secondLabel={"global"}*/}
                {/*                    selectedLabel={selectedType}*/}
                {/*                    onChange={label => setSelectedType(label)}*/}
                {/*                />*/}
                {/*            }*/}
                {/*            <button*/}
                {/*                className={"generate-form_button"}*/}
                {/*                type={"submit"}*/}
                {/*                disabled={isSubmitting}*/}
                {/*            >*/}
                {/*                Submit*/}
                {/*            </button>*/}
                {/*        </Form>*/}
                {/*    )}*/}
                {/*</Formik>*/}
            </FormLayout>
        </MainLayout>
    );
};

export default Templates;