import { useForm,SubmitHandler } from "react-hook-form";
import StyledLogin from "./style";
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validators";
import { useAuth } from "../../hooks/useProduct";
import { InputValidator } from "../../components/inputs";
import { useNavigate } from "react-router-dom";




const Login=()=> {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm<LoginData>({
    resolver: zodResolver(schema)
  })

  const {login}= useAuth();

  const submit:SubmitHandler<LoginData>= async(data)=>{
    login(data)
  }
  return (


  <StyledLogin>
    <div className="login-box">

   
    <h1>Login</h1>
    <form onSubmit={handleSubmit(submit)}>

      <InputValidator
      id="email"
      label="E-mail:"
      placeholder="Type your e-mail."
      error={errors.email?.message}
      {...register("email", {required:"Type your e-mail."})}
      />


      <InputValidator
      id="password"
      label="Password:"
      placeholder="Type your Password."
      error={errors.password?.message}
      {...register("password", {required:"Type your Password."})}
      />
    <div>
      <span className="remember-password">Esqueci minha senha</span>
    </div>
    <div className="confirm-box">

    <button className="btn-login" type="submit">
      Enter
    </button>
    </div>

    </form>
   
    <div className="register-box">
      <p className="not-acount">Don't have an account yet?</p>
      <button className="register-btn" onClick={()=>navigate("/register")}>Register</button>
    </div>

    </div>
   
  </StyledLogin>
  )
}
export  default Login
