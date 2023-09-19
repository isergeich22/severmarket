import React from "react";
import WithItem from "./subcomponents/WithItem";

export default function BuyWith() {

    return(

        <div className="buywith-form">
            <h3 className="buywith-form__header">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h3>
            <div className="buywith-form__list">
                <div className="buywith-form__list__row">
                    <WithItem />
                    <WithItem />
                </div>
                <div className="buywith-form__list__row">
                    <WithItem />
                    <WithItem />
                </div>
            </div>
        </div>

    )

}