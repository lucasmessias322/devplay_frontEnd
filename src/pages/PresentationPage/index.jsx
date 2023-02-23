import React from "react";
import * as C from "./style";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PresentationPage() {
  return (
    <C.Container>
      <C.SectionOne>
        <Header LoginSigninBtn>
          <C.SectionOneTexts>
            <h1>
              Devore novas <br />
              <span>tecnologias</span>
            </h1>
            <p>
              Aprenda com oque a de melhor gratuito na <br /> Internet de forma
              organizada
            </p>
          </C.SectionOneTexts>
        </Header>
      </C.SectionOne>
      <C.SectionTwo>
        <img src="/assets/1615989475_125046_url.gif" alt="" srcset="" />
        <C.SectionTwoTexts>
          <h1>
            Descubra <span>Algo novo!</span>
          </h1>
          <p>
            Com a DevPlay, Você pode descobrir e aprender tecnologias novas
            nunca antes vista por você.
          </p>
          <Link to="/dashboard">
            <span className="acessbtn">Acessar sem registro</span>
          </Link>
        </C.SectionTwoTexts>
      </C.SectionTwo>
      <Footer />
    </C.Container>
  );
}
