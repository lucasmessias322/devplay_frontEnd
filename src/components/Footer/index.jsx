import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <h4>Devplay</h4>
      <div className="removeContenttext">
        <p>
          Deseja retirar seu conteudo <br /> da plataforma?
        </p>
        <span>Click aqui</span>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
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
`;

export default Footer;
