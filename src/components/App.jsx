import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, ind) => {
                return ind !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addFunction={addNote} />
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        header={note.header}
                        content={note.content}
                        deleteFunction={deleteNote}
                    />
                );
            })}

            <Footer />
        </div>
    );
}

export default App;
