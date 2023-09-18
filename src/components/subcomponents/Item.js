import React from "react";
import Products from "./products.json";

export default function Item() {

    return(

        <div className="commend__list__row__item">
            <img className="commend__list__item__image" src={Products.product[0].image} alt="item"/>
            <p className="commend__list__item__title"><a href="/card">{Products.product[0].title}</a></p>
        </div>

    )

}