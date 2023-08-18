import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { advertSchemaValidator } from "../../schemas/advert.schema";
import { TAdverData } from "../../interfaces/advert.interface";
import { InputValidator } from "../inputs";
import { useProduct } from "../../hooks/useProduct";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

export const FormCreateAdvert = () => {
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
    console.log(data);
    if (data.table_fipe > data.price) {
      data.table_fipe = true;
    } else {
      data.table_fipe = false;
    }
    createAdvert(data);
  };

  useEffect(() => {
    getKenzieKarsInformation();
  }, []);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <select
        placeholder="Selecione Marca"
        {...register("brand", { required: "Informe a marca" })}
        onChange={(e) => getKenzieKarsByBrand(e.target.value)}
      >
        {kenzieKarsBrands.map((brand) => (
          <option key={brand} id={brand} value={brand}>
            {brand}
          </option>
        ))}
        <option key="other" id="other" value="other">
          Outro
        </option>
      </select>
      <select
        placeholder="Selecione o Modelo"
        {...register("model", { required: "Informe o modelo" })}
        onChange={(e) => getKenzieKar(e.target.value)}
      >
        <option key="defaunt" id="default" value="default"></option>
        {kenzieKars.map((kar) => (
          <option key={kar.id} id={kar.name} value={kar.name}>
            {kar.name}
          </option>
        ))}
        <option key="other" id="other" value="other">
          Outro
        </option>
      </select>
      <InputValidator
        id="year"
        label="Ano"
        placeholder="Ano"
        error={errors.year?.message}
        {...register("year", { required: "Informe o ano" })}
        value={kenzieKarModel?.year || ""}
      />
      <InputValidator
        id="fuel"
        label="Combustível"
        placeholder="Combustível"
        error={errors.fuel?.message}
        {...register("fuel", { required: "Informe o combustível" })}
        value={kenzieKarModel?.fuel || ""}
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
        {...register("table_fipe", { required: "Informe o preço" })}
      />
      <InputValidator
        id="price"
        label="Preço"
        placeholder="Insira o Preço"
        error={errors.price?.message}
        {...register("price", { required: "Informe o preço" })}
      />
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
      <Button type="submit">Enviar</Button>
    </form>
  );
};
