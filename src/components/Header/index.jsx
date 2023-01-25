import React, { useContext } from "react";
import * as C from "./style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header({
  playerPage = false,
  borderBottom = true,
  LoginSigninBtn,
  children,
}) {
  const { currentUserData, logout } = useContext(AuthContext);

  return (
    <C.Container playerPage={playerPage} borderBottom={borderBottom}>
      <C.Header playerPage={playerPage}>
        <div className="logoContain">
          <Link to="/dashboard">
            <h2>
              <span>{"<"}</span>Dev<span>Play</span>
              <span>{" />"}</span>
            </h2>
          </Link>

          {playerPage && <span className="nomeDoCurso">| Nome Do curso</span>}
        </div>

        <div className="loginSigninbtnsContainer">
          {currentUserData ? (
            <FaSignOutAlt onClick={logout} size={25} className="outBtn" />
          ) : (
            <>
              <Link to="/loginregister/login">
                <span>Login</span>
              </Link>
              <Link to="/loginregister/register">
                <span className="register">Register</span>
              </Link>
            </>
          )}
        </div>
      </C.Header>
      {children}
    </C.Container>
  );
}
