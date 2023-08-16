import { useNavigate } from "react-router";
import { StyledButtonLogin } from "./styled";

export const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <StyledButtonLogin type="submit" onClick={() => navigate("/login")}>
      Fazer Login
    </StyledButtonLogin>
  );
};
