import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(98.95deg, #302451 -0.83%, #4b3b76 97.71%);
  border-bottom: ${(props) =>
    props.borderBottom ? "10px solid #956fff" : "none"};
  padding: ${(props) => (props.playerPage ? "0px" : "10px 0px")};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: ${(props) => (props.playerPage ? "20px" : "10px 20px")};

  div.logoContain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    cursor: pointer;
    h2 {
      font-size: 20px;

      span {
        color: #ff003d;
      }
    }

    span.nomeDoCurso {
      color: grey;
      padding-left: 10px;
      font-size: 16px;
    }
  }

  div.loginSigninbtnsContainer {
    .outBtn {
      cursor: pointer;
    }
    span {
      cursor: pointer;
      color: white;
      padding: 10px;
    }
    span.register {
      background-color: #735db0;
      border-radius: 20px;
      padding: 10px 20px;
    }
  }
`;
