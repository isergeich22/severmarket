import React from "react";
import Cart from "../components/subcomponents/Cart";

export default function ProductCard() {

    return(

        <section className="card-main">
            <div className="card-main__header">
                <Cart />
            </div>
            <div className="card-main__card-info"></div>
        </section>

    )

}