import { useToast } from "@chakra-ui/toast";
import { Logout } from "./style";
import { useNavigate } from "react-router";
export const LogoutBtn = () => {
  const navigate = useNavigate();
  const toast = useToast()
  const submit = () => {
    toast({
      title: 'Account created.',
      description: "Até mais.",
      status: 'success',
      duration: 1300,
      isClosable: true,
    })
    localStorage.removeItem("@TOKEN");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return <Logout onClick={() => submit()} />;
};
