import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../../redux/user/actions";
import * as Styles from "./styles";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username: formData.email,
        password: md5(formData.password)
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });

      localStorage.setItem('name', response.data?.name ?? '')
      dispatch(loginUser({
        name: formData.name || response.data.name || "Usuário",
        email: formData.email
      }));

      navigate("/");
    } catch (error) {
      toast.error(`Erro no login: ${error.response?.data?.message || "Credenciais inválidas"}`, {
        position: "top-right"
      });
    }
  };

  const handleSignup = async () => {
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: md5(formData.password)
      };

      const response = await axios.post("http://localhost:3001/person", userData, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      toast.success('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        setIsLogin(true);
        setFormData({
          name: "",
          email: "",
          password: ""
        });
      }, 3000);

    } catch (error) {
      toast.error(`Erro ao cadastrar: ${error.response?.data?.message || error.message}`, {
        position: "top-right"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await handleLogin();
    } else {
      await handleSignup();
    }
  };

  return (
    <>
      <ToastContainer />
      <Styles.LoginContainer>
        <Styles.LoginFormContainer>
          <Styles.FormTitle>{isLogin ? "Login" : "Cadastre-se"}</Styles.FormTitle>

          <Styles.Form onSubmit={handleSubmit}>
            {!isLogin && (
              <Styles.InputGroup>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Styles.InputGroup>
            )}

            <Styles.InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Styles.InputGroup>

            <Styles.InputGroup>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Styles.InputGroup>

            <Styles.SubmitButton type="submit">
              {isLogin ? "Entrar" : "Cadastrar"}
            </Styles.SubmitButton>
          </Styles.Form>

          <Styles.ToggleForm>
            {isLogin ? (
              <>
                Não tem uma conta? <span onClick={() => setIsLogin(false)}>Cadastre-se</span>
              </>
            ) : (
              <>
                Já tem uma conta? <span onClick={() => setIsLogin(true)}>Faça login</span>
              </>
            )}
          </Styles.ToggleForm>
        </Styles.LoginFormContainer>

        <Styles.ImageContainer>
          <Styles.ImageEffect />
        </Styles.ImageContainer>
      </Styles.LoginContainer>
    </>
  );
}

export default LoginPage;