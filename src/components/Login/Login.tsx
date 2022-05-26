import React from "react"
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
// @ts-ignore
import { getCaptchaThunkCreator, loginThunkCreator } from '../../redux/authReducer.ts'
import { Navigate } from "react-router-dom";
import { validateLoginForm } from "../../utils/validateForm"
// @ts-ignore
import { AppStateType } from '../../redux/reduxStore.ts';

type MapStatePropsType = {
    isAuth: boolean,
    myId: number | null,
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: number, rememberMe: boolean, captcha: string) => void
    getGaptcha: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Login: React.FC<PropsType> = ({ login, isAuth, myId, captchaUrl, getGaptcha }) => {
    const onSubmit = (values: any, { setSubmitting }) => {
        login(values.email, values.password, values.rememberMe, values.captcha);  // setStatus - метод формика
        getGaptcha();
        setSubmitting(false);
    };

    if (isAuth) {
        return <Navigate to={`/profile/${myId}`} />
    }

    return (
        <section className="login">
            <h1 className="title">Login</h1>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false, captcha: '' }}
                validate={validateLoginForm}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isValid, dirty, status }) => (
                    <Form className="form form_place_login">

                        <Field
                            className="input input_place_login"
                            type={'text'}
                            name={'email'}
                            placeholder={'Email'}
                        />
                        {touched.email && errors.email && (
                            <div className="form__error">{errors.email}</div>
                        )}

                        <Field
                            className="input input_place_login"
                            type={'password'}
                            name={'password'}
                            placeholder={'Password'}
                        />
                        {touched.password && errors.password && (
                            <div className="form__error">{errors.password}</div>
                        )}

                        <div className="form__error">{status}</div>

                        <div className="form__checkbox-container">
                            <Field
                                className="form__checkbox"
                                type={'checkbox'}
                                name={'rememberMe'}
                            />
                            <label className="form__label" htmlFor={'rememberMe'}>Remember me</label>
                        </div>

                        {captchaUrl && <img className="form__captcha" src={captchaUrl} />}
                        {captchaUrl && <Field
                            className="input input_place_login input_theme_captcha"
                            type={'text'}
                            name={'captcha'}
                            placeholder={'Captcha'}
                        />}

                        <button className="button button_place_login" type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>
        </section>

    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        myId: state.auth.id,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login: loginThunkCreator, getGaptcha: getCaptchaThunkCreator })(Login);
