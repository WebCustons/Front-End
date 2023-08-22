import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { userUpdateSchema } from "../../schemas/user.schema";
import { TUpdateUser } from "./../../interfaces/user.interface";
import { InputValidator } from "../inputs";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useUser } from "../../hooks/useUser";

interface IFormEditUserProps {
  children: ReactNode;
}

export const FormEditUser = ({ children }: IFormEditUserProps) => {
  const { updateUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateUser>({
    mode: "onBlur",
    resolver: zodResolver(userUpdateSchema),
  });

  const submit: SubmitHandler<TUpdateUser> = (data) => {
    updateUser(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputValidator
        id="name"
        label="Nome"
        placeholder="Nome"
        {...register("name")}
        error={errors.name?.message}
      />
      <InputValidator
        id="email"
        label="E-mail"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email?.message}
      />
      <InputValidator
        id="cpf"
        label="CPF"
        placeholder="CPF"
        {...register("cpf")}
        error={errors.cpf?.message}
      />
      <InputValidator
        id="phone"
        label="Telefone"
        placeholder="Telefone"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <InputValidator
        id="description"
        label="Descrição"
        placeholder="Descrição"
        {...register("description")}
        error={errors.description?.message}
      />
      <InputValidator
        id="cep"
        label="CEP"
        placeholder="CEP"
        {...register("address.cep")}
        error={errors.address?.cep?.message}
      />
      <InputValidator
        id="state"
        label="Estado"
        placeholder="Estado"
        {...register("address.state")}
        error={errors.address?.state?.message}
      />
      <InputValidator
        id="city"
        label="Cidade"
        placeholder="Cidade"
        {...register("address.city")}
        error={errors.address?.city?.message}
      />
      <InputValidator
        id="street"
        label="Rua"
        placeholder="Rua"
        {...register("address.road")}
        error={errors.address?.road?.message}
      />
      <InputValidator
        id="number"
        label="Número"
        placeholder="Número"
        {...register("address.number")}
        error={errors.address?.number?.message}
      />
      <InputValidator
        id="complement"
        label="Complemento"
        placeholder="Complemento"
        {...register("address.complement")}
        error={errors.address?.complement?.message}
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
