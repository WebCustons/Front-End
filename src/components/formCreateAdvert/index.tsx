import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { advertSchemaValidator } from "../../schemas/advert.schema";
import { TAdverData } from "../../interfaces/advert.interface";
import { InputValidator, SelectValidator } from "../inputs";
import { useProduct } from "../../hooks/useProduct";
import { ReactNode, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { StyledInputsContainer } from "./style";

interface IFormCreateAdvertProps {
  children: ReactNode;
}

export const FormCreateAdvert = ({ children }: IFormCreateAdvertProps) => {
  const {
    getKenzieKarsByBrand,
    getKenzieKarsInformation,
    kenzieKarsBrands,
    kenzieKars,
    kenzieKarModel,
    getKenzieKar,
    createAdvert,
  } = useProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdverData>({
    mode: "onBlur",
    resolver: zodResolver(advertSchemaValidator),
  });

  const submit: SubmitHandler<TAdverData> = (data) => {
    const fullData = {
      ...data,
      table_fipe: kenzieKarModel!.value > data.price ? true : false,
      year: Number(kenzieKarModel!.year),
      fuel: String(kenzieKarModel!.fuel),
      mileage: Number(data.mileage),
      price: Number(data.price),
    };
    createAdvert(fullData);
  };

  useEffect(() => {
    getKenzieKarsInformation();
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <SelectValidator
        id="brandSelect"
        placeholder="Selecione Marca"
        label="Marca"
        options={["Selecionar", ...kenzieKarsBrands, "outro"]}
        {...register("brand", { required: "Informe a marca" })}
        onChange={(e) => {
          getKenzieKarsByBrand(e.target.value);
        }}
      />
      <SelectValidator
        id="modelSelect"
        label="Modelo"
        options={["Selecionar", ...kenzieKars.map((kar) => kar.name), "outro"]}
        placeholder="Selecione o Modelo"
        {...register("model", { required: "Informe o modelo" })}
        onChange={(e) => getKenzieKar(e.target.value)}
      ></SelectValidator>
      <StyledInputsContainer>
        <InputValidator
          id="year"
          label="Ano"
          placeholder="Ano"
          value={kenzieKarModel?.year || ""}
          readOnly
        />
        <InputValidator
          id="fuel"
          label="Combustível"
          placeholder="Combustível"
          value={kenzieKarModel?.fuel || ""}
          readOnly
        />
        <InputValidator
          id="mileage"
          label="Quilometragem"
          placeholder="Quilometragem"
          error={errors.mileage?.message}
          {...register("mileage", { required: "Informe a quilometragem" })}
        />
        <InputValidator
          id="color"
          label="Cor"
          placeholder="Cor"
          error={errors.color?.message}
          {...register("color", { required: "Informe a cor" })}
        />
        <InputValidator
          id="tablePrice"
          label="Preço tabela FIPE"
          placeholder="R$ 0.00"
          value={kenzieKarModel?.value || ""}
          readOnly
        />
        <InputValidator
          id="price"
          label="Preço"
          placeholder="Insira o Preço"
          error={errors.price?.message}
          {...register("price", { required: "Informe o preço" })}
        />
      </StyledInputsContainer>
      <InputValidator
        type="text"
        id="description"
        label="Descrição"
        placeholder="Insira a descrição aqui"
        error={errors.description?.message}
        {...register("description", { required: "Informe a descrição" })}
      />
      <InputValidator
        id="cover_image"
        label="Imagem de capa"
        placeholder="Insira a imagem de capa aqui"
        error={errors.cover_image?.message}
        {...register("cover_image", { required: "Informe imagem de capa" })}
      />
      <InputValidator
        id="image1"
        label="1ª Imagem da galeria"
        placeholder="Insira a imagem de capa aqui"
        error={errors.image_gallery?.message}
        {...register("image_gallery.0", { required: "Informe a imagem" })}
      />
      <InputValidator
        id="image2"
        label="2ª Imagem da galeria"
        placeholder="Insira a imagem de capa aqui"
        error={errors.image_gallery?.message}
        {...register("image_gallery.1", { required: "Informe a imagem" })}
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
