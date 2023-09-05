import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImgWrap, StyledAboutCarousel } from "./styles";
import { ReactElement } from "react";

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  568: { items: 3 },
  780: { items: 4 },
  1024: { items: 5 },
};


const team = [
  {
    name: "Mateus Carius",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U042UM0BHE2-1810affbde70-512",
    linkedin: "https://www.linkedin.com/in/mateus-carius-604033148/",
    github: "https://github.com/MattCari",
  },
  {
    name: "Matheus Gualtieri",
    avatar: "https://media.licdn.com/dms/image/D4D35AQEofxnw8d_6Vg/profile-framedphoto-shrink_800_800/0/1679694650636?e=1694462400&v=beta&t=bW4r9zUs5fqKtyXtiNbz8rmule267L4PzgQnJCQ2OUM",
    linkedin: "https://www.linkedin.com/in/matheus-gualtieri/",
    github: "https://github.com/MatheusGualtieri",
  },
  {
    name: "Matheus Ferreira",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U041XDXGKN1-df3166a76fd8-512",
    linkedin: "https://www.linkedin.com/in/matheusferreira33/",
    github: "https://github.com/MatheusFerreira33",
  },
  {
    name: "Natã Lomeu",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03KV6GAD88-b91d9b18f194-512",
    linkedin: "https://www.linkedin.com/in/natangaf/",
    github: "https://github.com/Natangaf",
  },
  {
    name: "Christian Vada",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03UEDRGBA4-ddfe6f7c8b08-512",
    linkedin: "https://www.linkedin.com/in/christianvada9/",
    github: "https://github.com/ChristianVada",
  },
  {
    name: "Bruno Henrique",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03JYR1217Y-2cccda05ec1f-512",
    linkedin: "https://www.linkedin.com/in/brunohgsantos/",
    github: "https://github.com/Brunohgs21",
  },
  {
    name: "Bruno Nunes",
    avatar: "https://ca.slack-edge.com/TQZR39SET-U03PS5V3EHW-05bd08fcda4a-512",
    linkedin: "https://www.linkedin.com/in/bruno-nunes-204a2623b/",
    github: "https://github.com/Bruno-Nuness",
  },
];


const items: ReactElement[] = [];

team.map((dev, index) =>
  items.push(
    <StyledAboutCarousel key={index}>
      <ImgWrap>
        <img src={dev.avatar} alt="imagem de avatar" draggable="false" />
      </ImgWrap>
      <h4>{dev.name}</h4>
      <hr />
      <div>
        <span>
          <a href={dev.linkedin} target="_blank">
            <BsLinkedin /> Linkedin
          </a>
        </span>
        <span>
          <a href={dev.github} target="_blank">
            <FaGithub /> Github
          </a>
        </span>
      </div>
    </StyledAboutCarousel>
  )
);

export const AboutCarousel = () => (
  <AliceCarousel
    mouseTracking
    touchTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    disableButtonsControls
    animationDuration={4000}
    autoPlay
    paddingLeft={70}
    autoPlayStrategy="default"
    infinite
  />
);
