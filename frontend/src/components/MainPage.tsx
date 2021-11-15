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
            <div className="existing-notes-panel">
                <div className="existing-note">1</div>
                <div className="existing-note">2</div>
                <div className="existing-note">3</div>
                <div className="existing-note">4</div>
                <div className="existing-note">5</div>
                <div className="existing-note">6</div>
                <div className="existing-note">7</div>
                <div className="existing-note">8</div>
                <div className="existing-note">9</div>
                <div className="existing-note">10</div>
                <div className="existing-note">11</div>
                <div className="existing-note">12</div>
            </div>
        </React.Fragment>
    );
};

export default MainPage;