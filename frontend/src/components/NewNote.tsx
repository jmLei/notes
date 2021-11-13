import React, {useState} from "react";

import "./NewNote.css";

const NewNote = () => {
    const [bodyStyle, setBodyStyle] = useState(
        {
            display: "none",
        }
    );
    
    const [titleStyle, setTitleStyle] = useState(
        {
            height: "24px",
            width: "30vw"
        }
    );

    const onBlurHandler = () => {
        console.log("Text field lost focus");
    };

    const onFocusHandler = () => {
        console.log("Text field has focus");
        setBodyStyle(
            {
                display: "inline",
            }
        );
    };

    return(
        <React.Fragment>
            <div 
                className="new-note-container"
                
            >
                    <input
                        onBlur={onBlurHandler}
                        onFocus={onFocusHandler}
                        style={titleStyle}
                        
                        placeholder="Untitled"
                    />
                    <input
                        style={bodyStyle}
                        placeholder="Write a new note..."
                        type="text"
                    />
            </div>
        </React.Fragment>
    );
};

export default NewNote;