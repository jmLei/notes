import "./ExistingNote.css";


const ExistingNote = (props:any) => {
    return(
        <div className="existing-note-container">
            <p>The title is {props.title}.</p>
            <p>The body is {props.body}.</p>
        </div>
    )
};

export default ExistingNote;