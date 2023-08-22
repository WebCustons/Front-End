import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { userUpdateSchema } from "../../schemas/user.schema";
import { TUpdateUser } from "./../../interfaces/user.interface";
import { InputValidator } from "../inputs";
import { Button, ButtonGroup } from "@chakra-ui/react";

interface IFormEditUserProps {
  children: ReactNode;
}

export const FormEditUser = ({ children }: IFormEditUserProps) => {
  const { register, handleSubmit } = useForm<TUpdateUser>({
    mode: "onBlur",
    resolver: zodResolver(userUpdateSchema),
  });

  const submit: SubmitHandler<TUpdateUser> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputValidator
        id="name"
        label="Nome"
        placeholder="Nome"
        {...register("name")}
      />
      <InputValidator
        id="email"
        label="E-mail"
        placeholder="E-mail"
        {...register("email")}
      />
      <InputValidator
        id="cpf"
        label="CPF"
        placeholder="CPF"
        {...register("cpf")}
      />
      <InputValidator
        id="phone"
        label="Telefone"
        placeholder="Telefone"
        {...register("phone")}
      />
      <InputValidator
        id="description"
        label="Descrição"
        placeholder="Descrição"
        {...register("description")}
      />
      <InputValidator
        id="cep"
        label="CEP"
        placeholder="CEP"
        {...register("address.cep")}
      />
      <InputValidator
        id="state"
        label="Estado"
        placeholder="Estado"
        {...register("address.state")}
      />
      <InputValidator
        id="city"
        label="Cidade"
        placeholder="Cidade"
        {...register("address.city")}
      />
      <InputValidator
        id="street"
        label="Rua"
        placeholder="Rua"
        {...register("address.road")}
      />
      <InputValidator
        id="number"
        label="Número"
        placeholder="Número"
        {...register("address.number")}
      />
      <InputValidator
        id="complement"
        label="Complemento"
        placeholder="Complemento"
        {...register("address.complement")}
      />
      <ButtonGroup width={"100%"} justifyContent={"space-between"}>
        {children}
        <Button
          backgroundColor={"var(--brand1)"}
          color={"var(--grey8)"}
          width={"40%"}
          border={"1px solid var(--brand1)"}
          transition={"0.5s"}
          _hover={{
            bg: "transparent",
            color: "var(--brand1)",
            transition: "0.5s",
          }}
          borderRadius={"10px"}
          type="submit"
        >
          Enviar
        </Button>
      </ButtonGroup>
    </form>
  );
};
