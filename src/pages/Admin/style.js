import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: linear-gradient(145.16deg, #2e224d 0%, #4b3b76 114.76%);
    padding: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .form-grup {
      margin: 10px;
    }

    input[type="text"] {
      background-color: transparent;
      width: 400px;
      border: none;
      outline: none;
      padding: 10px;
      border-bottom: 2px solid grey;
      font-size: 16px;
      color: white;
    }

    button {
      cursor: pointer;
      padding: 10px 20px;
      color: white;
      text-align: center;
      border-radius: 10px;
      border: none;
      background-color: green;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
