import React, { useContext } from "react";
import NotesContext from "../../context/notes-context";

import { NoteContainer } from "./styles";

export default function Note({ note }) {
  const { notesDispatch } = useContext(NotesContext);

  return (
    <NoteContainer key={note.title}>
      <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
      </div>
      <button
        type="button"
        onClick={() =>
          notesDispatch({ type: "REMOVE_NOTE", title: note.title })
        }
      >
        x
      </button>
    </NoteContainer>
  );
}
