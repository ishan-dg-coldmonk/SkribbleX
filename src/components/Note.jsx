import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.deleteFunction(props.id)}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
