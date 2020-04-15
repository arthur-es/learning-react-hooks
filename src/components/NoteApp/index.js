import React, { useEffect, useReducer } from "react";
import notesReducer from "../../reducers/notes";

import NoteList from "../NoteList";
import AddNoteForm from "../AddNoteForm";

import NotesContext from "../../context/notes-context";

import { Container } from "./styles";

function NoteApp() {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      notesDispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <Container>
      <NotesContext.Provider value={{ notes, notesDispatch }}>
        <h1>Notes App</h1>
        <NoteList />

        <AddNoteForm />
      </NotesContext.Provider>
    </Container>
  );
}

export default NoteApp;
