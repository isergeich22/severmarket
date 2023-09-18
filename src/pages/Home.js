import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/subcomponents/Search";
import Commend from "../components/Commend";
 
export default function Home() {

    return(

        <React.Fragment>
            <Header />
            <SearchForm />
            <Commend />
        </React.Fragment>

    )

}