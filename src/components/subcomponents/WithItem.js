import React from "react";
import Product from "./products.json"

export default function WithItem() {

    return(

        <div className="buywith-form__list__row__item">
            <img className="buywith-form__list__row__item__image" src={Product.product[0].image} alt="product"/>
            <p className="buywith-form__list__row__item__title">{Product.product[0].title}</p>
        </div>

    )

}