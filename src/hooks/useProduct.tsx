import { useContext } from "react";
import { ProductContext } from "../contexts/products.context";

export const useProduct = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};
