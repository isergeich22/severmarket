import React, {useState} from "react";
import Header from "../components/Header";
import SearchForm from "../components/subcomponents/Search";
import Commend from "../components/Commend";
import Cooperation from "../components/Cooperation";
import {answer} from "../stub-integration/data";
import Products from "../components/subcomponents/products.json";
import SearchResult from "../components/SearchResult";


const initialState = {answer: '', goods: []};

export default function Home() {
    const [searchContext, setSearchContext] = useState(initialState);

    return(

        <React.Fragment>
            <Header />
            <SearchForm doSearch={text => text
                ? setSearchContext({answer: answer, goods: Products})
                : setSearchContext(initialState)} />
            <SearchResult answer={searchContext.answer} goods={searchContext.goods} />
            <Commend />
            <Cooperation />
        </React.Fragment>

    )

}