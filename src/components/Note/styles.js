import styled from "styled-components";

export const NoteContainer = styled.div`
  background-color: #212121;
  color: white;
  padding: 10px 20px;
  width: 100%;
  max-width: 200px;
  margin-bottom: 20px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #ffca28;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    outline: none;
    color: white;

    &:hover {
      color: #212121;
    }
  }

  h3 {
    margin: 0px;
  }

  p {
    margin: 0;
  }
`;
