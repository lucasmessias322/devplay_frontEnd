import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120vh;
  background: #2e224d;
  background: linear-gradient(145.16deg, #2e224d 0%, #4b3b76 114.76%);
`;

export const Header = styled.header`
  background-color: #4b3b76;
  padding: 20px 10px;
  color: white;
  text-align: center;
  margin-bottom: 0px;

  h2 {
    font-size: 20px;
  }

  span {
    color: #ff003d;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid white;
  text-align: center;
  padding-bottom: 50px;
  max-width: 500px;

  img {
    width: 100%;
    margin: 0 auto;
    padding: 30px 0px;
  }

  form {
    padding: 5px 10px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: #d50059;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const HaveACount = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0px;

  p {
    color: white;
    font-size: 17px;

    span {
      cursor: pointer;
      color: #d50059;
    }
  }
`;
