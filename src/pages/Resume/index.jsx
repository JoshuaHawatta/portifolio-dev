import { ArticleWrapper, Glassmorphisim } from "./Styles";

//REACT_ICONS
import * as SiIcons from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

//IMAGES
import laptopImage from "../../assets/images/knowledges.jpg";
import aboutMeImage from "../../assets/images/about-me.jpg";
import { Link } from "react-router-dom";

const ResumePage = () => {
  return (
    <ArticleWrapper>
      <img src={laptopImage} alt='stacks-knowledges' />

      <Glassmorphisim>
        <div>
          <img src={aboutMeImage} alt='presenting-my-self' />
          <div>
            <p>
              Olá, meu nome é Joshua Hawatta, tenho 20 anos e eu sou um programador Full Stack há 4 anos.
              <br />
              Sou especialista em criar desde o banco de dados até a interface visual de uma aplicação, de uma
              maneira fácil e eficiente.
            </p>

            <p>
              Além da minha paixão por programação, adoro passar meu tempo livre lendo, assistindo filmes de ficção
              científica e ouvindo música de qualidade.
              <br />
              Se você tem uma ideia para um site, blog ou landing page, estou aqui para ajudar.
            </p>

            <p>
              Embora esteja baseado em Brasília, estou disponível para atender suas demandas de qualquer lugar, e
              podemos trabalhar remotamente.
              <br />
              Sinta-se à vontade para <Link to='/contact'>entrar em contato comigo</Link> para iniciarmos o
              trabalho no seu projeto. Juntos, podemos criar algo incrível.
            </p>
          </div>
        </div>

        <aside>
          <SiIcons.SiJavascript color='#F0DB4F' />
          <SiIcons.SiTypescript color='#3178c6' />
          <SiIcons.SiPhp color='#8993be' />
          <FaJava color='#f89820' />
          <SiIcons.SiHtml5 color='#e34c26' />
          <SiIcons.SiCss3 color='#2965f1' />
          <SiIcons.SiReact color='#61DBFB' />
          <SiIcons.SiNextdotjs color='#FFF' />
          <SiIcons.SiNodedotjs color='#68AD63' />
          <SiIcons.SiExpress color='#9e8cda' />
          <SiIcons.SiNestjs color='#ea2845' />
          <SiIcons.SiSpringboot color='#6DB33F' />
          <SiIcons.SiMongodb color='#4DB33D' />
          <FaDatabase color='#FFFFFF' />
          <SiIcons.SiDocker color='#0db7ed' />
        </aside>
      </Glassmorphisim>
    </ArticleWrapper>
  );
};

export default ResumePage;
