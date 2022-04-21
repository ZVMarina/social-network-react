import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { loginThunkCreator } from '../../redux/authReducer'

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if
        (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <= 6) {
        errors.password = 'Must be longer than 6 characters';
    }
    return errors;
};

const Login = (props) => {
    return (
        <section className="login">
            <h1 className="title">Login</h1>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validate={validateLoginForm}
                onSubmit={(values) => {
                    console.log(values);
                    props.login(values.email, values.password, values.rememberMe);
                }}
            >
                {() => (
                    <Form className="form">

                        <Field className="form__input" type={'text'} name={'email'} placeholder={'Email'} />
                        <ErrorMessage className="form__error" name="email" component="div" />

                        <Field className="form__input" type={'password'} name={'password'} placeholder={'Password'} />
                        <ErrorMessage className="form__error" name="password" component="div" />

                        <div className="form__checkbox-container">
                            <Field className="form__checkbox" type={'checkbox'} name={'rememberMe'} />
                            <label className="form__label" htmlFor={'rememberMe'}>Remember me</label>
                        </div>

                        <button className="button form__button" type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>
        </section>

    )
}

export default connect(null, { login: loginThunkCreator })(Login);