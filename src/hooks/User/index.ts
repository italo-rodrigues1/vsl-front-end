import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function useLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log("email, name >>>>>", email, name);

    if (token && (!name || !email)) {
      const decoded: any = jwt_decode(token);
      setName(decoded.name);
      setEmail(decoded.email);
      setLoggedUser(decoded);
    }
  }, [name, email, loggedUser]);

  const loginForm = async (e: any) => {
    e.preventDefault();
    console.log("login", email, password);

    if (email !== "" || password !== "") {
      try {
        const { data } = await api.post("/auth", {
          email,
          password,
        });
        console.log("res > login > ", data.token);
        localStorage.setItem("Token", data.token);
        const decoded: any = jwt_decode(data.token);
        console.log("decoded", decoded);
        if (data.message) {
          toast.warning("Usuario não existe, reveja as informações.");
        }
        // localStorage.setItem("Token", JSON.stringify(decoded));
        navigate("/search");
      } catch (error) {
        console.log("login > error ", error);
        toast.error("Verifique suas informações. Usuário não existe!");
      }
    } else {
      toast.error("Preencha os campos antes de continuar!");
    }
  };

  const loginGoogle = (decoded: any) => {
    // e.preventDefault();
    console.log("loginGoogle", email, name);
    console.log("loginGoogle >> decoded", decoded);
    const decodedJwt: any = jwt_decode(decoded);
    // if (email !== "" || name !== "") {
    // }
    setLoggedUser(decodedJwt);
    localStorage.setItem("Token", decoded);
    navigate("/search");
  };

  const registerForm = async (e: any) => {
    e.preventDefault();
    console.log("Cadastro", name, email, password);

    if (name !== "" || email !== "" || password !== "") {
      if (password.length > 6) {
        try {
          const { data } = await api.post("/auth/register", {
            name,
            email,
            password,
          });
          console.log("res > register > ", data);
          localStorage.setItem("Token", data.token);

          navigate("/search");
        } catch (error) {
          console.log("register > error ", error);
          toast.error("Verifique suas informações. Usuário não existe!");
        }
      } else {
        toast.error("Senha deve ter no mínimo 6 caracteres!");
      }
    } else {
      toast.error("Preencha os campos antes de continuar!");
    }
  };

  return {
    loginForm,
    loginGoogle,
    registerForm,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loggedUser,
  };
}
