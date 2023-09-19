import React from "react";
import SocialAuthButton from "../components/subcomponents/SocialAuthButton";

export default function Login() {

    return(
    
        <section className="login-main">
            <div className="auth-form">
                <h3 className="auth-form__title">ВОЙДИТЕ С ПОМОЩЬЮ НОМЕРА ТЕЛЕФОНА</h3>
                <input type="text" className="auth-form__input" placeholder="Номер"></input>
                <input type="text" className="auth-form__input" placeholder="Пароль"></input>
                <button type="submit" className="auth-form__button" ><a href="/lk">Войти</a></button>
                <div className="auth-form__social-auth">
                    <SocialAuthButton src="img/google.png"/>
                    <SocialAuthButton />
                    <SocialAuthButton />
                </div>
            </div>
            <div className="signup-form">
                <p className="sighnup-form__text">или</p>
                <a href="/signup">зарегистрируйтесь</a>
            </div>
        </section>

    )

}