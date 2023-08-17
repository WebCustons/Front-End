import { useForm, SubmitHandler } from "react-hook-form";
import StyledLogin from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, schema } from "./validators";
import { useAuth } from "../../hooks/useProduct";
import { InputValidator } from "../../components/inputs";
import { useNavigate } from "react-router-dom";
import { LoginRegisterButtons } from "../../components/Buttons/LoginAndRegister";
import Header from "../../components/header";
import { Footer } from "../../components/footer";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const { login, loadingBnt } = useAuth();

  const submit: SubmitHandler<LoginData> = async (data) => {
    login(data);
  };

  return (
    <StyledLogin>
      <Header>
        <LoginRegisterButtons />
      </Header>
      <div className="login-container">


        <div className="login-box">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(submit)}>
            <InputValidator
              id="email"
              label="E-mail:"
              placeholder="Digite e-mail."
              error={errors.email?.message}
              {...register("email", { required: "Digite e-mail." })}
            />

            <InputValidator
              id="password"
              label="Senha:"
              placeholder="Digite sua senha."
              error={errors.password?.message}
              {...register("password", { required: "Digite sua Senha." })}
            />
            <div>
              <span className="remember-password">Esqueci minha senha</span>
            </div>
            <div className="confirm-box">
              <button className="btn-login" type="submit" disabled={loadingBnt || Object.keys(errors).length != 0 && true}>
                Entrar
              </button>
            </div>
          </form>
          <div className="register-box">
            <p className="not-acount">Ainda não possui uma conta?</p>
            <button
              className="register-btn"
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </StyledLogin>
  );
};
export default Login;
