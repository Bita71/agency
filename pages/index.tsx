import React from "react";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Catalog from "../components/Catalog/Catalog";

const Hello: React.FC = () => {
    return (<div>
        <Header/>
        <main>
            <Intro/>
            <Catalog/>
        </main>
    </div>);
};

export default Hello;
