import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/subcomponents/Search";
import Commend from "../components/Commend";
import Cooperation from "../components/Cooperation";
 
export default function Home() {

    return(

        <React.Fragment>
            <Header />
            <SearchForm />
            <Commend />
            <Cooperation />
        </React.Fragment>

    )

}