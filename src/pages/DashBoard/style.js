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

// export const PagnationContainer = styled.div`
//   width: 100%;
//   display: flex;
// `;

// export const paginationItem = styled.div`
//   padding: 5px 10px;
//   background-color: ${(props) => (props.currentPage ? "blue" : "#b00216")};
//   color: white;
//   margin: 1px;
//   border-radius: 5px;
// `;
