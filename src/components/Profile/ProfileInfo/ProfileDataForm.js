import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ProfileDataForm = ({ profile, saveProfile, deactiveteEditMode }) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        saveProfile(
            {
                fullName: values.fullName,
                aboutMe: values.aboutMe,
                lookingForAJob: values.lookingForAJob,
                lookingForAJobDescription: values.lookingForAJobDescription,
                contacts: values.contacts,
            },
            setStatus); // setStatus - метод формика
        // console.log(values);
        setSubmitting(false);

        // console.log(Object.values(profile.contacts))

        /* Object.entries(profile.contacts)
        .map((contact, index) =>
            console.log(contact, contact[1])) */

            Object.keys(profile.contacts)
        .map((contactKey) =>
            console.log(contactKey, profile.contacts[contactKey]))
    };

    return (
        <section className="edit-profile">
            <div className="edit-profile__popup">
                <h1 className="title title_place_edit-info">Edit profile info</h1>
                <Formik
                    initialValues={{
                        fullName: profile.fullName,
                        aboutMe: profile.aboutMe,
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        contacts: Object.keys(profile.contacts),
                    }}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched, isValid, dirty, status }) => (
                        <Form className="form form_place_edit-info">

                            <div className="form__input-wrapper form__input-wrapper_theme_name">
                                <h3 className="title title_place_job">{'My name'}</h3>
                                <Field
                                    className="form__input form__input_theme_name form__input_place_edit-info"
                                    type={'text'}
                                    name={'fullName'}
                                />
                            </div>

                            <div className="form__input-wrapper form__input-wrapper_theme_about">
                                <h3 className="title title_place_job">{'About me'}</h3>
                                <Field
                                    className="form__input form__input_theme_about"
                                    type={'text'}
                                    name={'aboutMe'}
                                    as={'textarea'}
                                    placeholder='write here...'
                                />
                            </div>

                            <div className="form__input-wrapper form__input-wrapper_theme_job">
                                <h3 className="title title_place_job">{'Are you looking for a job?'}</h3>
                                <div className="form__checkbox-container">
                                    <Field className="form__checkbox" type={'checkbox'} name={'lookingForAJob'} />
                                    <label className="form__label" htmlFor={'rememberMe'}>Yes</label>
                                </div>
                            </div>

                            {profile.lookingForAJob &&
                                <div className="form__input-wrapper form__input-wrapper_theme_skills">
                                    <h3 className="title title_place_skills">{'My skills'}</h3>
                                    <Field
                                        className="form__input"
                                        type={'text'}
                                        name={'lookingForAJobDescription'}
                                        as={'textarea'}
                                        placeholder='write here...'
                                    />
                                </div>
                            }

                            <div className="contacts contacts_place_edit-info form__input-wrapper_theme_contacts">
                                <h2 className="title title_place_contacts">Contacts: </h2>
                                {profile && Object.keys(profile.contacts)
                                    .map((contactKey) =>
                                        <div className="contacts__item">
                                            <h3 className="contact__heading">{contactKey}</h3>
                                            <Field
                                                key={contactKey}
                                                className="form__input form__input_place_edit-info"
                                                type={'text'}
                                                name={'contacts'+ [contactKey]}
                                                placeholder={'Your contacts'}
                                            />
                                        </div>
                                    )
                                }

                            </div>

                            <button className="button form__button button_place_edit-info" type={'submit'}>Save</button>
                        </Form>

                    )}
                </Formik>
                <button onClick={deactiveteEditMode} className="button_place_profile-data-close" type="button" aria-label="Close"></button>
            </div>
        </section>

    )
}

export default ProfileDataForm;