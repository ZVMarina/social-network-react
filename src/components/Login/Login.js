import React from "react"

function Login() {
    return (
        <section className="login">
            <h1 className="title">Login</h1>
            <form className="form">
                <input className="form__input" placeholder={"Login"} required />
                <input className="form__input" placeholder={"Pasword"} required />
                <div className="form__checkbox-container">
                    <label className="form__label" for="remember-me">Запомнить меня</label>
                    <input className="form__checkbox" id="remember-me" type={"checkbox"} />
                </div>
                <button className="button form__button">Login</button>
            </form>
        </section>

    )
}

export default Login;