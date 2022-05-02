import React from "react"
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { loginThunkCreator } from '../../redux/authReducer'
import { Navigate } from "react-router-dom";

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

const Login = ({ login, isAuth, myId }) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        login(values.email, values.password, values.rememberMe, setStatus);  // setStatus - метод формика
        setSubmitting(false);
    };

    if (isAuth) {
        return <Navigate to={`/profile/${myId}`} />
    }

    return (
        <section className="login">
            <h1 className="title">Login</h1>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validate={validateLoginForm}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isValid, dirty, status }) => (
                    <Form className="form">

                        <Field className="input input_place_login" type={'text'} name={'email'} placeholder={'Email'} />
                        {touched.email && errors.email && (
                            <div className="form__error">{errors.email}</div>
                        )}

                        <Field className="input input_place_login" type={'password'} name={'password'} placeholder={'Password'} />
                        {touched.password && errors.password && (
                            <div className="form__error">{errors.password}</div>
                        )}

                        <div className="form__error">{status}</div>

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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
    }
}

export default connect(mapStateToProps, { login: loginThunkCreator })(Login);