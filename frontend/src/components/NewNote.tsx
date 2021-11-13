import React from "react";

import "./NewNote.css";

const NewNote = () => {
    return(
        <React.Fragment>
            <div className="new-note-container">
                <div>
                    <input
                        className="new-note-field"
                        placeholder="Title..."
                        type="text"
                    />
                </div>
                <div>
                    <input
                        className="new-note-field"
                        placeholder="Body..."
                        type="text"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewNote;