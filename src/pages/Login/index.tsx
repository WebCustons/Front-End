import { useForm, SubmitHandler } from "react-hook-form"
import StyledLogin,{StyledFormForgoutPassword} from "./style"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validators"
import { InputValidator } from "../../components/inputs"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header"
import { Footer } from "../../components/footer"
import { useState } from "react"
import { LoginRegisterButtons } from "../../components/Buttons/LoginAndRegister"
import { useUser } from './../../hooks/useProduct';

const Login = () => {
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  })

  const { login, loadingBnt } = useUser()

  const submit: SubmitHandler<LoginData> = async (data) => {
    login(data)
  }

  return (
    <StyledLogin>
      <Header>
        <LoginRegisterButtons />
      </Header>
      <div className="login-container">
      {forgotPassword ? (
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
                  type="password"
                  placeholder="Digite sua senha."
                  error={errors.password?.message}
                  {...register("password", { required: "Digite sua Senha." })}
                />
                <div>
                  <span className="remember-password" onClick={()=>setForgotPassword(false)}>Esqueci minha senha</span>
                </div>
                <div className="confirm-box">
                  <button
                    className="btn-login"
                    type="submit"
                    disabled={
                      loadingBnt || (Object.keys(errors).length != 0 && true)
                    }
                  >
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
      ):(
        <StyledFormForgoutPassword>
          <InputValidator
                  id="email"
                  label="Digite um Email existente na plataforma:"
                  type="email"
                  placeholder="Digite seu Email"
                />
            <div className="buttonsForgoutPassword">

                <button className="buttonVoltar" onClick={()=> setForgotPassword(true)}>Voltar</button>
                <button className="buttonSubmit"onClick={()=> navigate('/recoverPassword')}>Enviar</button><br/>
              

            </div>
        </StyledFormForgoutPassword>
      )}
      </div>
      <Footer />
    </StyledLogin>
  )
}
export default Login
