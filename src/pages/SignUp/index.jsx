import MainLayout from "../../components/MainLayout";
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import WelcomeMessage from "../../components/WelcomeMessage";
import SimpleInput from "../../components/SimpleInput";
import "./signUp.scss";
import {useDispatch, useSelector} from "react-redux";
import {clearErrorMessage, register} from "../../redux/userSlice";
import ErrorMessage from "../../components/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {pageURL} from "../../const/page";
import FormFooterLink from "../../components/FormFooterLink";

const SignUp = (props) => {
    const {isAuthorized} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(clearErrorMessage());
    }, []);
    useEffect(() => {
        if (isAuthorized) navigate(pageURL.generate);
    }, [isAuthorized]);
    return (
        <MainLayout showHeader={false}>
            <WelcomeMessage/>
            <ErrorMessage/>
            <Formik
                initialValues={
                    {
                        username: "",
                        password: "",
                        confirmPassword: ""
                    }
                }
                validationSchema={
                    Yup.object().shape({
                        username: Yup.string()
                            .max(50)
                            .required(),
                        password: Yup.string().max(50).required(),
                        confirmPassword: Yup.string()
                            .equals([Yup.ref('password')]).required()
                    })}
                onSubmit={
                    (values) =>
                        dispatch(register({
                            username: values.username,
                            password: values.password
                        }))
                }
            >
                {({isSubmitting}) => (
                    <Form className={"sign-up-form"}>
                        <Field
                            name={"username"}
                            type={"text"}
                            placeholder={"Username"}
                            maxLength={150}
                            component={SimpleInput}
                        />
                        <Field
                            name={"password"}
                            type={"password"}
                            placeholder={"Password"}
                            maxLength={150}
                            component={SimpleInput}
                        />
                        <Field
                            name={"confirmPassword"}
                            type={"password"}
                            placeholder={"Confirm Password"}
                            maxLength={150}
                            component={SimpleInput}
                        />
                        <button
                            className={"sign-up-button"}
                            type={"submit"}
                            disabled={isSubmitting}
                        >
                            Sign Up
                        </button>
                        <FormFooterLink
                            linkText={"Sign in"}
                            to={pageURL.auth}
                            userMessage={"Already have an account?"}
                        />
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default SignUp;