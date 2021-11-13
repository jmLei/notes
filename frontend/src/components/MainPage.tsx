import React from "react";

import NewNote from "./NewNote";
import Header from "./Header";

import "./MainPage.css";

const MainPage = () => {
    return(
        <React.Fragment>
            <Header/>
            <div className="new-note-panel">
                <NewNote/>
            </div>
        </React.Fragment>
    );
};

export default MainPage;