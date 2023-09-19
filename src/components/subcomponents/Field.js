import React from "react";

export default function Field({ placeholder, className }) {

    return(

        <input type="text" className={className} placeholder={placeholder} />

    )
    
}