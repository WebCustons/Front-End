import { useContext } from "react"
import { AuthorizationContext } from "../contexts/loginAndRegister.context"

export const useUser = () => {
  const user = useContext(AuthorizationContext)

  return user
}
