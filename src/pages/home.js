import React from "react";
import styled from "styled-components";

// import Counter from "../components/Counter";
import NoteApp from "../components/NoteApp";

export default function Home() {
  return (
    <Container>
      <NoteApp />
    </Container>
  );
}

const Container = styled.div`
  background-color: #282a36;
  color: white;
  width: 100%;
  height: 100vh;
`;
