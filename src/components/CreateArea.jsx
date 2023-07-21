import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [note, setNote] = React.useState({ header: "", content: "" });
    const [expand, setExpand] = React.useState(false);

    function updateNote(event) {
        const newValue = event.target.value;
        const whichField = event.target.name;
        setNote((prevNote) => {
            if (whichField === "header")
                return { header: newValue, content: prevNote.content };
            else return { header: prevNote.header, content: newValue };
        });
    }

    function insertNote(event) {
        event.preventDefault(); // to prevent default behaviour of submitting the form and refreshing the page
        props.addFunction(note);
        setNote({ header: "", content: "" });
    }

    return (
        <div>
            <form className="create-note">
                {expand ? (
                    <input
                        name="header"
                        onChange={updateNote}
                        value={note.header}
                        placeholder="Note Heading"
                    />
                ) : null}

                <textarea
                    onClick={() => setExpand(true)}
                    name="content"
                    onChange={updateNote}
                    value={note.content}
                    placeholder="add a note..."
                    rows={expand ? "4" : "1"}
                />

                <button onClick={insertNote}>
                    <AddIcon />
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
