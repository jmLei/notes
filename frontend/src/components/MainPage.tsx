import React from "react";

import Editor from "./Editor";

import "./MainPage.css";

const MainPage = () => {
    return(
        <React.Fragment>
            <div id="main-page-container">
                <div id="main-page-left">
                    Left Container
                </div>
                <div id="main-page-center">
                    <Editor/>
                </div>
                <div id="main-page-right">
                    Right Container
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainPage;