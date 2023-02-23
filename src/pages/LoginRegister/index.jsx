import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Input from "../../components/Input";
import { toast, ToastContainer } from "react-toastify";
import { postLogin, postRegister } from "../../services/Api";
import * as C from "./style";

export default function LoginRegister() {
  const params = useParams();
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (params.login === "login") {
      setLogin(true);
    } else if (params.login === "register") {
      setLogin(false);
    }
  }, []);

  return (
    <C.Container>
      <ToastContainer />
      <C.Header>
        <h2>
          <Link to="/">
            <span>{"<"}</span>Dev<span>Play</span>
            <span>{" />"}</span>
          </Link>
        </h2>
      </C.Header>
      <C.FormContainer>
        <img draggable={false} src="/assets/Group 35.png" alt="header" />
        {login ? <LoginComponent /> : <RegisterComponent />}
      </C.FormContainer>
      <C.HaveACount>
        {login ? (
          <p>
            Você não possui uma conta?{" "}
            <span onClick={() => setLogin(false)}>Crie aqui</span>
          </p>
        ) : (
          <p>
            Ja possui uma conta?
            <span onClick={() => setLogin(true)}>Faça login</span>
          </p>
        )}
      </C.HaveACount>
    </C.Container>
  );
}

function LoginComponent() {
  const [values, setValues] = useState({ email: "", password: "" });
  const { token, setToken, setCurrentUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();

    postLogin(values)
      .then((response) => {
        setToken(response.data.token);
        setCurrentUserData(response.data.currentUser);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

    if (token) {
      setToken(token);
      return navigate("/");
    }
    setValues({ email: "", password: "" });
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmit}>
      <Input
        Email
        text="email"
        placeholder="Seu Email"
        required
        name="email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      <Input
        Password
        text="password"
        placeholder="Senha"
        name="password"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        value={values.password}
        required
      />
      <C.ButtonSubmit>{loading ? "Carregando..." : "Acessar"}</C.ButtonSubmit>
    </form>
  );
}

function RegisterComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { token, setToken, setCurrentUserData } = useContext(AuthContext);
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();

    postRegister(values)
      .then((response) => {
        setToken(response.data.token);
        setCurrentUserData(response.data.currentUser);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast("Erro ao se registrar: " + error);
        console.log(error);
      });

    if (token) {
      setToken(token);
      return navigate("/");
    }
    setValues({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmit}>
      <Input
        User
        text="text"
        placeholder="Seu nome e sobrenome"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
        required
      />
      <Input
        User
        text="text"
        placeholder="Nome de Usuario exemplo: fulano642"
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        value={values.username}
        required
      />
      <Input
        Email
        text="email"
        placeholder="Seu Email"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
        required
      />
      <Input
        Password
        text="text"
        placeholder="Senha"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        value={values.password}
        required
      />
      <Input
        Password
        text="password"
        placeholder="Digite a Senha novamente"
        onChange={(e) =>
          setValues({ ...values, confirmpassword: e.target.value })
        }
        value={values.confirmpassword}
        required
      />
      <C.ButtonSubmit>
        {loading ? "Carregando..." : "Registrar-me"}
      </C.ButtonSubmit>
    </form>
  );
}
