import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebaseConection";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function goTo() {
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("logado");
          navigate("/register", { replace: true });
        })
        .catch(() => {
          alert("error");
        });
    } else {
      alert("necessário preenchimento ds campos");
    }
  }

  return (
    <div className="login">
      <div className="container">
        <input
          className="camp-email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o sei E-amil"
        />
        <input
          className="camp-password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button className="btn" onClick={goTo}>
          Entrar
        </button>
        <Link className="link" to="/register">
          Cadastrar
        </Link>
      </div>
    </div>
  );
}
export default Login;
