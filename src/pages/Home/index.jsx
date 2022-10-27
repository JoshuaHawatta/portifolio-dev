import { MainWrapper, Presentation, WhoIAm, PresentationImage } from './Styles';
import PresentationImageUrl from '../../assets/images/presentation-image.jpg';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import CTA_BUTTON from '../../components/CtaButton';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <Presentation>
                <WhoIAm>
                    <div>
                        <h1>D<span>e</span>senvolvedor Full-Stack</h1>
                        <p>Eu crio interfaces para sites, web-apps e afins.</p>
                        <p>Atualmente estudo Node.js e SQL para a criação de APIs.</p>
                        
                        <p>
                            Gosto de usar esse superpoder para ajudar você a criar seu site!
                        </p>

                        <CTA_BUTTON
                            icon={ <FaPaperPlane /> }
                            text='Me chame!'
                            action={ () => navigate('/contact') }
                        />
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