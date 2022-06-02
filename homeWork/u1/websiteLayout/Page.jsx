import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./style.css";


const Page = () => {

    return (
        <div>
            <div className="appContainer">
                <Header />
                <Content />
                <Footer />

            </div>
        </div>

    )

}

export default Page;