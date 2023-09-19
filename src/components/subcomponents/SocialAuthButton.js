import React from "react";

export default function SocialAuthButton( {src}) {

    return(

        <button className="auth-form__social-auth__button"><img src={src}></img></button>

    )

}