import React from "react";
import Item from "./subcomponents/Item";

export default function Commend() {

    return(

        <section className="commend">
            <h3 className="commend__title">Рекомендованные товары</h3>
            <div className="commend__list">
                <div className="commend__list__row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <div className="commend__list__row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </section>

    )

}