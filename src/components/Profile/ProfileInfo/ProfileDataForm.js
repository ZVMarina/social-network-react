import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validateLoginForm = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Required';
    }
    return errors;
};

const ProfileDataForm = ({ profile, saveProfile, deactiveteEditMode, userId }) => {
    const onSubmit = (values, { setSubmitting }) => {
        saveProfile(
            {
                fullName: values.fullName,
                aboutMe: values.aboutMe,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                contacts: values.contacts,
            }, userId);

        setSubmitting(false);
        deactiveteEditMode();
    };

    return (
        <section className="popup popup_type_edit-info">
            <div className="popup__container">
                <h1 className="title title_place_edit-info">Edit profile info</h1>
                <Formik
                    initialValues={{
                        fullName: profile.fullName,
                        aboutMe: profile.aboutMe,
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        contacts: profile.contacts,
                    }}
                    validate={validateLoginForm}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched, isValid, dirty, status }) => (
                        <Form className="form form_place_edit-info">

                            <div className="form__data-container">
                                <div className="form__input-wrapper form__input-wrapper_theme_name">
                                    <h3 className="subtitle subtitle_place_form-data">{'My name'}</h3>
                                    <Field
                                        className="input input_place_profile-form-data"
                                        type={'text'}
                                        name={'fullName'}
                                    />
                                    {touched.fullName && errors.fullName && (
                                        <div className="form__error">{errors.fullName}</div>
                                    )}
                                </div>

                                <div className="form__input-wrapper form__input-wrapper_theme_about">
                                    <h3 className="subtitle subtitle_place_form-data">{'About me'}</h3>
                                    <Field
                                        className="input input_place_theme_about-and-skills"
                                        type={'text'}
                                        name={'aboutMe'}
                                        as={'textarea'}
                                        placeholder='write here...'
                                    />
                                </div>

                                <div className="form__input-wrapper form__input-wrapper_theme_job">
                                    <h3 className="subtitle subtitle_place_form-data">{'Are you looking for a job?'}</h3>
                                    <div className="form__checkbox-container">
                                        <Field
                                            className="form__checkbox"
                                            type={'checkbox'}
                                            name={'lookingForAJob'}
                                        />
                                        <label className="form__label" htmlFor={'rememberMe'}>Yes</label>
                                    </div>
                                </div>

                                {profile.lookingForAJob &&
                                    <div className="form__input-wrapper form__input-wrapper_theme_skills">
                                        <h3 className="subtitle subtitle_place_form-data">{'My skills'}</h3>
                                        <Field
                                            className="input input_place_theme_about-and-skills"
                                            type={'text'}
                                            name={'lookingForAJobDescription'}
                                            as={'textarea'}
                                            placeholder='write here...'
                                        />
                                    </div>
                                }

                                <div className="contacts">
                                    <h3 className="subtitle subtitle_place_form-data">Contacts: </h3>
                                    {profile && Object.keys(profile.contacts)
                                        .map((contactKey) =>
                                            <div
                                                key={contactKey}
                                                className="form__input-wrapper form__input-wrapper_theme_contacts">
                                                <p className="subtitle subtitle_place_contatcs">{contactKey}</p>
                                                <Field
                                                    className="input input_place_profile-form-data"
                                                    type={'text'}
                                                    name={`contacts.${contactKey}`}
                                                    placeholder={'Your contacts'}
                                                />
                                            </div>
                                        )
                                    }

                                </div>
                            </div>

                            <button
                                className="button form__button button_place_profile-data-save"
                                type={'submit'}
                            >Save
                            </button>
                        </Form>

                    )}
                </Formik>
                <button
                    onClick={deactiveteEditMode}
                    className="button_place_profile-data-close"
                    type="button"
                    aria-label="Close">
                </button>
            </div>
        </section>

    )
}

export default ProfileDataForm;