import React from "react";

import ExistingNote from "./ExistingNote";
import NewNote from "./NewNote";
import Header from "./Header";

import "./MainPage.css";

const existingNotes = [
    { title: "Title1", body: "Body1 Body1Body1Body1Body1Body1" },
    { title: "Title2", body: "Body2" },
    { title: "Title3", body: "Body3" },
    { title: "Title4", body: "Body4" },
    { title: "Title5", body: "Body5" }
];

const MainPage = () => {
    return(
        <React.Fragment>
            <Header/>
            <div className="new-note-panel">
                <NewNote/>
            </div>
            <div className="existing-notes-panel">
                {existingNotes.map((note) =><ExistingNote title={note.title} body={note.body}/>)}
            </div>
        </React.Fragment>
    );
};

export default MainPage;