import { MainWrapper, Presentation, WhoIAm, PresentationImage } from './Styles';
import PresentationImageUrl from '../../assets/images/presentation-image.jpg';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <Presentation>
                <WhoIAm>
                    <div>
                        <h1>D<span>e</span>senvolvedor Full-Stack</h1>

                        <p>
                            Eu crio interfaces para sites, web-apps e afins.
                            <br />
                            Atualmente estudo Node.js e SQL para a criação de APIs.
                            <br />
                            Gosto de usar esse super-poder para ajudar você a criar seu site!
                        </p>

                        <button onClick={ () => navigate('/contact') }>
                            <FaPaperPlane /> Me chame!
                        </button>
                    </div>
                </WhoIAm>

                <PresentationImage>
                    <img src={ PresentationImageUrl } alt='presentation-image' />
                </PresentationImage>
            </Presentation>
        </MainWrapper>
    )
}

export default HomePage