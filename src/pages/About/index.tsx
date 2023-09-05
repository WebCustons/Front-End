import { StyledAbout } from "./styled";
import { AboutCarousel } from "../../Components/AboutCarousel";

export const About = () => {
  return (
    <StyledAbout>
      <main>
        <h2 >
          Equipe de Desenvolvimento:
        </h2>
        <AboutCarousel />
      </main>
    </StyledAbout>
  );
};
