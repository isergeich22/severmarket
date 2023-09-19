import React from "react";
import Field from "../components/subcomponents/Field";

export default function Profile() {

    return(

        <section className="profile-info">
            <div className="profile-info__main-info">
                <div className="profile-info__main-info__user-info">
                    <h3 className="profile-info__main-info__user-info__title">ОСНОВНАЯ ИНФОРМАЦИЯ</h3>
                    <div className="profile-info__main-info__user-info__type">
                        <h4 className="profile-info__main-info__user-info__sub-title">ПРОДАВЕЦ</h4>
                        <h4 className="profile-info__main-info__user-info__sub-title__inactive">ПОКУПАТЕЛЬ</h4>
                    </div>
                    <div className="profile-info__main-info__user-info__field-list">
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'Номер'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'ИНН'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'ОГРНИП'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'Дата регистрации'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'Гражданство'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'Название'}/>
                        <Field className={"profile-info__main-info__user-info__field-list__item"} placeholder={'Регион'}/>
                    </div>
                    <button type="submit" className="profile-info__main-info__user-info__button">Обновить</button>
                </div>
                <div className="profile-info__main-info__financial-info">
                    <div className="profile-info__main-info__financial-info__self-arrears">
                        <h3 className="profile-info__main-info__financial-info__self-arrears__title">ВАШИ ЗАДОЛЖЕННОСТИ</h3>
                        <div className="profile-info__main-info__financial-info__self-arrears__filed-list">
                            <div className="profile-info__main-info__financial-info__self-arrears__filed-list__row">
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                            </div>
                            <div className="profile-info__main-info__financial-info__self-arrears__filed-list__row">
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                            </div>                           
                        </div>
                    </div>
                    <div className="profile-info__main-info__financial-info__no-self-arrears">
                        <h3 className="profile-info__main-info__financial-info__no-self-arrears__title">ЗАДОЛЖЕННОСТИ ПЕРЕД ВАМИ</h3>
                        <div className="profile-info__main-info__financial-info__self-arrears__filed-list">
                            <div className="profile-info__main-info__financial-info__self-arrears__filed-list__row">
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                            </div>
                            <div className="profile-info__main-info__financial-info__self-arrears__filed-list__row">
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                                <Field className={"profile-info__main-info__financial-info__self-arrears__filed-list__row__item"} placeholder={'Номер'}/>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>            
            <div className="profile-info__user-products">
                <h3 className="profile-info__user-products__title">ВАШИ ТОВАРЫ</h3>
                <div className="profile-info__user-products__list">
                    <div className="profile-info__user-products__list__card">+</div>
                </div>
            </div>
        </section>
    )

}