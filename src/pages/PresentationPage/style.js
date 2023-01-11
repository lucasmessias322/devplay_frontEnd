import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #080216;

  footer {
    background: linear-gradient(94.86deg, #2e224d -0.8%, #3e2f68 121.11%);
    height: 300px;

    h4 {
      color: white;
      background-color: #2e224d;
      padding: 20px;
    }

    div {
      padding: 20px;
      p {
        color: white;
        font-size: 15px;
        margin-bottom: 20px;
      }

      span {
        font-size: 15px;
        color: white;
        background-color: #ff003d;
        padding: 5px 15px;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 20px;

  div.logoContain {
    color: white;
    h2 {
      font-size: 20px;
    }

    span {
      color: #ff003d;
    }
  }

  div.loginSigninbtnsContainer {
    span {
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

export const SectionOne = styled.section`
  background: linear-gradient(98.95deg, #302451 -0.83%, #4b3b76 97.71%);
`;
export const SectionOneTexts = styled.div`
  color: white;
  padding: 100px 50px;

  h1 {
    color: white;
  }
  span {
    color: #ff003d;
  }
  p {
    margin: 10px 0px;
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 100px;

  img {
    max-width: 350px;
    margin-right: 300px;
  }

  @media (max-width: 500px) {
    text-align: center;
    padding: 100px 10px;
    img {
      display: none;
    }
  }
`;

export const SectionTwoTexts = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;

  h1 {
    color: white;
  }
  span {
    color: #ff003d;
  }
  p {
    max-width: 300px;
    margin-top: 10px;
  }

  a {
    margin: 20px 0px;
    background-color: #ff003d;
    padding: 10px;
    border-radius: 20px;
    max-width: 200px;
    text-align: center;
    span.acessbtn {
      color: white;
    }
    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 10px black;
    }
  }

  @media (max-width: 500px) {
    padding: 10px;
    text-align: center;
    align-items: center;

    a {
      span.acessbtn {
        margin: 20px auto;
      }
    }
  }
`;
