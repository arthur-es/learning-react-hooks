import React, { useState, useContext } from "react";
import NotesContext from "../../context/notes-context";

export default function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { notesDispatch } = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();

    notesDispatch({ type: "ADD_NOTE", title, body });

    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>Add a note:</p>

      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button className="add-note" type="submit">
          add note
        </button>
      </form>
    </>
  );
}
