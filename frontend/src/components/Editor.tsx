import React, {useEffect, useState} from "react";

import "./Editor.css";

const Editor = () => {
    const DEFAULT_FONT_SIZE = "16px";
    const DEFAULT_H1 = "28px";
    const DEFAULT_H2 = "26px";
    const DEFAULT_H3 = "24px";
    const DEFAULT_H4 = "22px";

    const [inputHistory, setInputHistory] = useState("");

    let currentFontSize = DEFAULT_FONT_SIZE;

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textFieldInput:string = event.target.value;
        setInputHistory(inputHistory + textFieldInput.charAt(textFieldInput.length - 1));
    };

    useEffect(() => {

    });

    return(
        <React.Fragment>
            <iframe>
            </iframe>
            <br/>
            <textarea>
            </textarea>
        </React.Fragment>
    )
};

export default Editor;