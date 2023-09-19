import Item from "./subcomponents/Item";
import React from "react";

export default function SearchResult({answer, goods}) {

    if (answer.length === 0) {
        return (<br />);
    }

    return(

        <section className="commend">
            <article className="commend__text">
                {answer}
            </article>

            <h3 className="commend__title">Товары по вашему запросу</h3>
            {
                goods.map(it => {
                    return (
                        <div className="commend__list">
                            <h5 className="commend__title">{it.category}</h5>
                            <div className="commend__list__row">
                                {it.items.map(item => <Item name={item.name} img={item.img} price={item.price} />)}
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )

}