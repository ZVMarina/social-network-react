import { Formik, Form, Field, ErrorMessage } from "formik";

const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div className="profile__info profile__contacts">
            <b>{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

const ProfileDataForm = ({ profile }) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        /* setProfileInfo(values.email, values.password, values.rememberMe, setStatus);  */ // setStatus - метод формика
        setSubmitting(false);
    };

    console.log(Object.values(profile.contacts));
    // console.log(Object.entries(profile.contacts));

    return (
        <section className="edit-profile-data">
            <h1 className="title title_place_edit-info">Edit profile info</h1>
            <Formik
                initialValues={{
                    fullName: profile.fullName,
                    aboutMe: profile.aboutMe,
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    contacts: Object.values(profile.contacts)
                }}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isValid, dirty, status }) => (
                    <Form className="form form_place_edit-info">

                        <div className="form__input-wrapper form__input-wrapper_theme_name">
                            <Field
                                className="form__input form__input_theme_name"
                                type={'text'}
                                name={'fullName'}
                                placeholder={'full name'}
                            />
                        </div>

                        <div className="form__input-wrapper form__input-wrapper_theme_about">
                            <Field
                                className="form__input"
                                type={'text'}
                                name={'aboutMe'}
                                placeholder={'about me'}
                                as={'textarea'}
                            />
                        </div>

                        <div className="form__input-wrapper form__input-wrapper_theme_job">
                            <h3 className="title title_place_job">{'Are you looking for a job?'}</h3>
                            <div className="form__label-container">
                                <label
                                    className="form__label"
                                    htmlFor={'yes'}>Yes</label>
                                <Field
                                    /* className="form__checkbox" */
                                    type={'radio'}
                                    name={'choice'}
                                    id={'yes'}
                                    value={'yes'}
                                />
                                <label
                                    className="form__label"
                                    htmlFor={'no'}>No</label>
                                <Field
                                    /* className="form__checkbox" */
                                    type={'radio'}
                                    name={'choice'}
                                    id={'no'}
                                    value={'no'}
                                />
                            </div>
                        </div>

                        <div className="form__input-wrapper form__input-wrapper_theme_skills">
                            <Field
                                className="form__input"
                                type={'text'}
                                name={'lookingForAJobDescription'}
                                placeholder={'your skills...'}
                            />
                        </div>

                        <div className="contacts contacts_place_edit-info form__input-wrapper_theme_contacts">
                            <h2 className="title title_place_contacts">Contacts: </h2>
                            {profile && Object.entries(profile.contacts)
                                .map(contact =>
                                    <div className="contacts__item">
                                        <h3 className="contact__heading">{contact[0]}</h3>
                                        <Field
                                            key={contact}
                                            className="form__input form__input_place_edit-info"
                                            type={'text'}
                                            name={'contacts'}
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
        </section>

    )
}

export default ProfileDataForm;