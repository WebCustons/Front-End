import { useContext } from "react";
import { ProductContext } from "../contexts/products.context";
import { AuthorizationContext } from "../contexts/loginAndRegister.context";

export const useProduct = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};
export const useAuth = ()=>{
  const authContext = useContext(AuthorizationContext)
  return authContext
}