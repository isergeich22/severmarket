import React from "react";
import Products from "./products.json";

export default function Item({img, name, price}) {

    const src = img ?? Products[1].items[0].img;
    const name1 = name ?? Products[1].items[0].name;
    const price1 = price ?? Products[1].items[0].price;

    return(

        <div className="commend__list__row__item">
            <img className="commend__list__item__image" src={src} alt="item"/>
            <p className="commend__list__item__title"><a href="/card">{name1}</a></p>
            <p className="commend__list__item__title">{price1}</p>
        </div>

    )

}