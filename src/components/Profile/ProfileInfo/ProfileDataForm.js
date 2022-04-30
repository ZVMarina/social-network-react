import { Formik, Form, Field, ErrorMessage } from "formik";

const ProfileDataForm = ({ profile }) => {
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        /* setProfileInfo(values.email, values.password, values.rememberMe, setStatus);  */ // setStatus - метод формика
        setSubmitting(false);
    };

    return (
        <section className="edit-profile-data">
            <h1 className="title title_place_edit-info">Edit profile info</h1>
            <Formik
                initialValues={{
                    fullName: profile.fullName,
                    aboutMe: profile.aboutMe,
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    contacts: profile.contacts
                }}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isValid, dirty, status }) => (
                    <Form className="form">

                        <Field
                            className="form__input"
                            type={'text'}
                            name={'fullName'}
                            placeholder={'full name'} />

                        <Field
                            className="form__input"
                            type={'text'}
                            name={'aboutMe'}
                            placeholder={'about me'} />

                        {/* <Field
                            className="form__input"
                            type={'text'}
                            name={'lookingForAJobDescription'}
                            placeholder={'Are you looking for a job?'} /> */}

                        {/* <Field
                            className="form__input"
                            type={'text'}
                            name={'contacts'}
                            placeholder={'Your contacts'}
                        /> */}

                        <label className="profile__subtitle">Contacts: </label>
                        {profile && Object.keys(profile.contacts)
                            .map(contactKey =>
                                <Field
                                    key={contactKey}
                                    /* contactsTitle={contactKey}
                                    contactsValue={profile.contacts[contactKey] ? profile.contacts[contactKey] : 'no data'} */
                                    className="form__input"
                                    type={'text'}
                                    name={'contacts'}
                                    placeholder={'Your contacts'}
                                />
                            )
                        }

                        <div className="form__checkbox-container">
                            <label>{'Are you looking for a job?'}</label>
                            <label
                                className="form__label"
                                htmlFor={'yes'}>Yes</label>
                            <Field
                                className="form__checkbox"
                                type={'radio'}
                                name={'choice'}
                                id={'yes'}
                                value={'yes'}
                            />
                            <label
                                className="form__label"
                                htmlFor={'no'}>No</label>
                            <Field
                                className="form__checkbox"
                                type={'radio'}
                                name={'choice'}
                                id={'no'}
                                value={'no'}
                            />
                        </div>

                        <button className="button form__button" type={'submit'}>Save</button>
                    </Form>
                )}
            </Formik>
        </section>

    )
}

export default ProfileDataForm;