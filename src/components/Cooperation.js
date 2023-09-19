import React from "react";
import CoopCard from "./subcomponents/CoopCard";

export default function Cooperation() {

    return (

        <div className="cooperation">
            <h3 className="cooperation__title">Сотрудничество</h3>
            <div className="cooperation__list">
                <CoopCard title="ИНВЕСТИЦИИ" />
                <CoopCard title="СКИДКИ И ПРИВИЛЕГИИ"/>
                <CoopCard title="БАРТЕР" />
            </div>
        </div>

    )

}