import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  .searchingContainer {
    display: flex;
    align-items: center;
    padding: 20px;
    margin-top: 100px;
    margin-bottom: 10px;

    input {
      max-width: 400px;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 16px;
      height: 40px;
    }

    button {
      padding: 10px;
      background-color: #2e224d;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      border-radius: 100%;
      margin: 0px 10px;
    }
  }

  /* footer {
    margin-top: 200px;
    background-color: #2e224d;
    padding: 40px;
    border-top: solid 5px #735db0;
  } */

  @media (max-width: 500px) {
    .searchingContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      margin-top: 100px;
      margin-bottom: 10px;

      input {
        max-width: 400px;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 16px;
        height: 40px;
      }

      button {
        padding: 10px;
        background-color: #2e224d;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        border-radius: 100%;
        margin: 0px 10px;
      }
    }
  }
`;
