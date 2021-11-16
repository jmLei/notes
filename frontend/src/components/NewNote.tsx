import React, {useEffect, useState} from "react";

import "./NewNote.css";

const NewNote = () => {
    const [titleFocused, setTitleFocused] = useState(false);
    const [bodyFocused, setBodyFocused] = useState(false);

    const bodyStyle = {
        display: (bodyFocused || titleFocused) ? "inline" : "none"
    }
  
    
    const [titleStyle, setTitleStyle] = useState(
        {
            height: "24px",
            width: "30vw"
        }
    );

    useEffect(() => {
        console.log("***useEffect()***");
        console.log("bodyFocused = " + bodyFocused);
        console.log("titleFocused = " + titleFocused);
    });

    const onBodyBlurHandler = () => {
        setTimeout(() => {
            setBodyFocused(false);
        }, 100);
    };

    const onBodyFocusHandler = () => {
        setBodyFocused(true);
    };

    const onTitleBlurHandler = () => {
        setTimeout(() => {
            setTitleFocused(false);
        }, 100);
    };

    const onTitleFocusHandler = () => {
        setTitleFocused(true);
    };

    return(
        <React.Fragment>
            <div 
                className="new-note-container"     
            >
                    <input
                        onBlur={onTitleBlurHandler}
                        onFocus={onTitleFocusHandler}
                        style={titleStyle}
                        placeholder="Untitled"
                        type="text"
                    />
                    <input
                        onBlur={onBodyBlurHandler}
                        onFocus={onBodyFocusHandler}
                        style={bodyStyle}
                        placeholder="Write a new note..."
                        type="text"
                    />
            </div>
        </React.Fragment>
    );
};

export default NewNote;