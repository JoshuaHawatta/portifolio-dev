import { MainWrapper, Presentation, WhoIAm, PresentationImage } from "./Styles";
import PresentationImageUrl from "../../assets/images/presentation-image.jpg";
import { useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import CTA_BUTTON_JSX from "../../components/CtaButton";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <Presentation>
        <WhoIAm>
          <div>
            <h1>
              D<span>e</span>senvolvedor Full Stack
            </h1>
            <p>Eu crio sites, APPs e sistemas.</p>
            <p>Nas horas vagas, ajudo startups e pessoas a migrarem de profissão.</p>
            <p>Têm uma ideia e quer tirar da cabeça? Me chame!</p>

            <CTA_BUTTON_JSX icon={<FaPaperPlane />} text='Me chame!' action={() => navigate("/contact")} />
          </div>
        </WhoIAm>

        <PresentationImage>
          <img src={PresentationImageUrl} alt='presentation-image' />
        </PresentationImage>
      </Presentation>
    </MainWrapper>
  );
};

export default HomePage;
