import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect } from "react";
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
  const { updateUser, user, getUser } = useUser();

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputValidator
        id="name"
        label="Nome"
        placeholder={user?.name}
        {...register("name")}
        error={errors.name?.message}
      />
      <InputValidator
        id="email"
        label="E-mail"
        placeholder={user?.email}
        {...register("email")}
        error={errors.email?.message}
      />
      <InputValidator
        id="cpf"
        label="CPF"
        placeholder={user?.cpf}
        {...register("cpf")}
        error={errors.cpf?.message}
      />
      <InputValidator
        id="phone"
        label="Telefone"
        placeholder={user?.phone}
        {...register("phone")}
        error={errors.phone?.message}
      />
      <InputValidator
        id="description"
        label="Descrição"
        placeholder={user?.description}
        {...register("description")}
        error={errors.description?.message}
      />
      <InputValidator
        id="cep"
        label="CEP"
        placeholder={user?.address.cep}
        {...register("address.cep")}
        error={errors.address?.cep?.message}
      />
      <InputValidator
        id="state"
        label="Estado"
        placeholder={user?.address.state}
        {...register("address.state")}
        error={errors.address?.state?.message}
      />
      <InputValidator
        id="city"
        label="Cidade"
        placeholder={user?.address.city}
        {...register("address.city")}
        error={errors.address?.city?.message}
      />
      <InputValidator
        id="road"
        label="Rua"
        placeholder={user?.address.road}
        {...register("address.road")}
        error={errors.address?.road?.message}
      />
      <InputValidator
        id="number"
        label="Número"
        placeholder={user?.address.number}
        {...register("address.number")}
        error={errors.address?.number?.message}
      />
      <InputValidator
        id="complement"
        label="Complemento"
        placeholder={user?.address.complement}
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
