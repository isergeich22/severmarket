import React from "react";
import Cart from "../components/subcomponents/Cart";
import BuyWith from "../components/BuyWith";

export default function ProductCard() {

    return(

        <section className="card-main">
            <div className="card-main__header">
                <Cart />
            </div>
            <div className="card-main__card-info">
                <div className="card-main__card-info__product">
                    <img className="card-main__card-info__product__image" src="img/image.jpg" alt="product"/>
                    <p className="card-main__card-info__product__title">ПРОФЕССИОНАЛЬНАЯ КОФЕМАШИНА</p>
                    <div className="card-main__card-info__product__description"></div>                    
                </div>
                <BuyWith />
            </div>
        </section>

    )

}