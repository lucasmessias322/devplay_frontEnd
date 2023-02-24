import React, { useContext, useState } from "react";
import { postNewCurso } from "../../services/Api";
import * as C from "./style";
import { AuthContext } from "../../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

export default function Admin() {
  const [apiKey, setApiKey] = useState("");
  const { token, currentUserData } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    postNewCurso(token, currentUserData, currentUserData._id, apiKey)
      .then((response) => {
        toast(response.data.msg);
      })
      .catch(function (error) {
        console.error(error);
        toast(error);
      });
  }

  return (
    <C.Container>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="form-grup">
          <input
            required
            type="text"
            placeholder="API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        <div className="form-grup">
          <button>Enviar Curso</button>
        </div>
      </form>
    </C.Container>
  );
}
