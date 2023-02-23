import React, { useContext, useState } from "react";
import * as C from "./style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header({
  playerPage = false,
  borderBottom = true,
  LoginSigninBtn,
  children,
  curseName,
}) {
  const { currentUserData, logout } = useContext(AuthContext);
  const [showMenu, setshowMenu] = useState(false);
  return (
    <C.Container playerPage={playerPage} borderBottom={borderBottom}>
      <C.Header playerPage={playerPage}>
        <div className="logoContain">
          <Link to="/">
            <h2>
              <span>{"<"}</span>Dev<span>Play</span>
              <span>{" />"}</span>
            </h2>
          </Link>

          {playerPage && <span className="nomeDoCurso">| {curseName}</span>}
        </div>

        <div className="loginSigninbtnsContainer">
          {currentUserData ? (
            <C.UserProfileDropDow showMenu={showMenu}>
              <img
                className="userprofile"
                src="/assets/default-profile-icon-24.jpg"
                onMouseEnter={() => setshowMenu(true)}
              />

              <div className="listMenu" onMouseLeave={() => setshowMenu(false)}>
                <div className="userdetails">
                  <img src="/assets/default-profile-icon-24.jpg" />
                  <div className="userdetails_data">
                    <h3>
                      <abbr title={currentUserData.name}>
                        {currentUserData.name}
                      </abbr>
                    </h3>
                    <span className="userEmail">
                      <abbr title={currentUserData.email}>
                        {currentUserData.email}
                      </abbr>
                    </span>
                  </div>
                </div>
                <ul>
                  <li onClick={logout}>
                    <span>Sair</span>
                  </li>
                </ul>
              </div>
            </C.UserProfileDropDow>
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
