import { AboutCarousel } from "../../components/AboutCarousel";
import { StyledAbout } from "./styled";

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
