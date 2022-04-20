import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/FormValidation";

const Login = (props) => {
    return (
        <section className="login">
            <h1 className="title">Login</h1>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={loginFormSchema}>
                {() => (
                    <Form className="form">

                        <Field className="form__input" type={'text'} name={'email'} placeholder={'Email'} />
                        <ErrorMessage name="email" component="div" />

                        <Field className="form__input" type={'password'} name={'password'} placeholder={'Password'} />
                        <ErrorMessage name="password" component="div" />

                        <div className="form__checkbox-container">
                            <Field className="form__checkbox" type={'checkbox'} name={'rememberMe'} />
                            <label className="form__label" htmlFor={'rememberMe'}>Remember me</label>
                        </div>

                        <button className="button form__button">Login</button>
                    </Form>
                )}
            </Formik>
        </section>

    )
}

export default Login;