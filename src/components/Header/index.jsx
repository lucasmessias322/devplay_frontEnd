import React, { useContext } from "react";
import * as C from "./style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Header({
  playerPage = false,
  borderBottom = true,
  LoginSigninBtn,
  children,
}) {
  const { currentUserData } = useContext(AuthContext);

  return (
    <C.Container playerPage={playerPage} borderBottom={borderBottom}>
      <C.Header playerPage={playerPage}>
        <div className="logoContain">
          <h2>
            <span>{"<"}</span>Dev<span>Play</span>
            <span>{" />"}</span>
          </h2>
          {playerPage && <span className="nomeDoCurso">| Nome Do curso</span>}
        </div>

        {!currentUserData && (
          <div className="loginSigninbtnsContainer">
            <Link to="/loginregister/login">
              <span>Login</span>
            </Link>
            <Link to="/loginregister/register">
              <span className="register">Register</span>
            </Link>
          </div>
        )}
      </C.Header>
      {children}
    </C.Container>
  );
}
