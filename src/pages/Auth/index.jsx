import MainLayout from "../../components/MainLayout";
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import WelcomeMessage from "../../components/WelcomeMessage";
import SimpleInput from "../../components/SimpleInput";
import "./auth.scss";
import {useDispatch, useSelector} from "react-redux";
import {clearErrorMessage, login} from "../../redux/userSlice";
import ErrorMessage from "../../components/ErrorMessage";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {pageURL} from "../../const/page";
import FormFooterLink from "../../components/FormFooterLink";

const Auth = (props) => {
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
                        password: ""
                    }
                }
                validationSchema={
                    Yup.object().shape({
                        username: Yup.string()
                            .max(50)
                            .required(),
                        password: Yup.string().max(50).required(),
                    })}
                onSubmit={(values) => dispatch(login(values))}
            >
                {({isSubmitting}) => (
                    <Form className={"auth-form"}>
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
                        <button
                            className={"auth-button"}
                            type={"submit"}
                            disabled={isSubmitting}
                        >
                            Sign In
                        </button>
                        <FormFooterLink
                            linkText={"Create an account"}
                            to={pageURL.signUp}
                            userMessage={"Not registered?"}
                        />
                    </Form>
                )}
            </Formik>
        </MainLayout>
    );
};

export default Auth;