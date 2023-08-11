import { useAuth } from "../../hooks/useProduct";
import { useForm } from "react-hook-form";
import StyledRegister from "./style";
import { ClientData } from "./validators";

import { InputValidator, SelectValidator, TextareaValidator } from "../../components/inputs";

const Register=()=> {
  const {register,handleSubmit, formState:{errors}}=useForm<ClientData>();
  const {registerUser }= useAuth();

  const submit = async (data:ClientData)=>{
    console.log(data)
    try {
      console.log("AQUI")
      await registerUser(data) 
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
  <StyledRegister>
    <div className="register-box">

   
    <h1>Register</h1>
    <form onSubmit={handleSubmit(submit)}>

      <InputValidator
      id="name"
      label="Name:"
      type="text"
      placeholder="Ex: your name."
      error={errors.name?.message}
      {...register("name", {required:"Enter your name."})}
      />

      <InputValidator
      id="email"
      label="Email:"
      type="email"
      placeholder="Ex: youremail@mail.com."
      error={errors.email?.message}
      {...register("email", {required:"Enter your email."})}
      />

      
      <InputValidator
      id="cpf"
      label="cpf:"
      type="text"
      placeholder="000.000.000-00"
      error={errors.cpf?.message}
      {...register("cpf", {required:"Enter your CPF."})}
      />

      <InputValidator
      id="phone"
      label="Phone:"
      type="number"
      placeholder="(DDD) 90000-0000"
      error={errors.phone?.message}
      {...register("phone", {required:"Enter your phone."})}
      />

      <InputValidator
      id="birth_date"
      label="Birth date:"
      type="text"
      placeholder="00/00/00"
      error={errors.birth_date?.message}
      {...register("birth_date", {required:"Enter your birth date."})}
      />

 
      <TextareaValidator
      label="Description"
      id="description"
      error={errors.description?.message}
      placeholder="Description"
      {...register("description",{required: 'Enter a description.'})}
      />


      <InputValidator
      id="cep"
      label="CEP:"
      type="text"
      placeholder="Enter your cep."
      error={errors.address?.cep?.message}
      {...register("address.cep", {required:"Enter your cep."})}
      />

      <div className="state-box">
      <InputValidator
      id="state"
      label="State:"
      type="text"
      placeholder="Enter your state."
      error={errors.address?.state?.message}
      {...register("address.state", {required:"Enter your state."})}
      />

      <InputValidator
      id="city"
      label="City:"
      type="text"
      placeholder="Enter your city."
      error={errors.address?.city?.message}
      {...register("address.city", {required:"Enter your city."})}
      />
      </div>
      
      
      <SelectValidator
      label="Type of User"
      id="type_user"
      options={["customer", "admin", "seller"]}
      error={errors.type_user?.message}
      {...register("type_user", {required:"Enter your city."})}
      />
 

      <InputValidator
      id="road"
      label="Road:"
      type="text"
      placeholder="Enter your road."
      error={errors.address?.road?.message}
      {...register("address.road", {required:"Enter your road."})}
      />

      <div className="number-box">

      <InputValidator
      id="number"
      label="number:"
      type="number"
      placeholder="Enter your number."
      error={errors.address?.number?.message}
      {...register("address.number", {required:"Enter your number."})}
      />

      <InputValidator
      id="complement"
      label="complement:"
      type="text"
      placeholder="Enter your complement."
      error={errors.address?.complement?.message}
      {...register("address.complement", {required:"Enter your complement."})}
      />
      </div>

      <InputValidator
      id="password"
      label="Password:"
      type="password"
      placeholder="Enter your password."
      error={errors.password?.message}
      {...register("password", {required:"Enter your password."})}
      />

      <InputValidator
      id="confirm_password"
      label="Confirm password:"
      type="confirm_password"
      placeholder="Confirm password."
      error={errors.confirm_password?.message}
      {...register("confirm_password", {required:"confirm password."})}
      />


      <button type="submit" className="register-btn">Finalize registration</button>
    </form>
    </div>
  </StyledRegister>
  );
}

export default Register