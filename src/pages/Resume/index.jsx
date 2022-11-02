import { useState } from 'react';
import { ArticleWrapper, HardSkills, Glasmorphosim, SoftSkills, MySelf } from './Styles';

//REACT_ICONS
import { FaDatabase, FaTools, FaPen, FaUserAlt, FaRegClock } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiJava } from 'react-icons/si';
import { RiUserVoiceFill, RiUserSettingsFill } from 'react-icons/ri';
import { HiUserGroup, HiEmojiHappy } from 'react-icons/hi';

//COMPONENTS
import ICON_WITH_TEXT_JSX from '../../components/IconWithText';
import CTA_BUTTON_JSX from '../../components/CtaButton';

//IMAGES
import laptopImage from '../../assets/images/knowledges.jpg';
import aboutMeImage from '../../assets/images/about-me.jpg';

const ResumePage = () => {
    const [showSection, setShowSection] = useState('myself');

    return (
        <ArticleWrapper>
            <img src={ laptopImage } alt="stacks-knowledges" />

            { showSection === 'myself' &&
                <MySelf>
                    <Glasmorphosim>
                        <h1>S<span>o</span>bre mim</h1>

                        <div>
                            <img src={ aboutMeImage } alt="presenting-my-self" />

                            <div>
                                <p>
                                    Oi! Meu nome é Joshua Hawatta, tenho 19 anos e sou Programador Full-Stack. Eu crio tanto o banco de dados quanto a parte visual de uma aplicação-web.
                                </p>

                                <p>
                                    Isso significa que: se você tem uma ideia de site, blog, landing-page, etc... eu sou o cara para isso!
                                </p>

                                <p>
                                    Atualmente moro em Brasília, mas o Home-Office mudou totalmente a forma que trabalhamos, então hoje estou à uma mensagem de distância, seja lá qual for sua demanda!
                                </p>
                            </div>
                        </div>
                    </Glasmorphosim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outlined={ true }
                        action={ () => setShowSection('hard-skills') }
                        text="Hard-Skills!"
                        icon={ <FaTools /> }
                    />
                </MySelf>
            }
            
            { showSection === 'hard-skills' &&
                <HardSkills>
                    <Glasmorphosim>
                        <h1>H<span>a</span>rd-Skills</h1>                           
                                               
                        <div>
                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiJavascript color='#F0DB4F' /> }
                                title='JavaScript'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiReact color='#61DBFB' /> }
                                title='React'
                                percentage={ 95 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiHtml5 color='#e34c26' /> }
                                title='HTML'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiCss3 color='#2965f1' /> }
                                title='CSS'
                                percentage={ 95 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiNodedotjs color='#68AD63' /> }
                                title='Node.js'
                                percentage={ 50 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <FaDatabase color='#FFFFFF' /> }
                                title='SQL'
                                percentage={ 65 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiJava color='#ED1D25' /> }
                                title='Java'
                                percentage={ 45 }
                            />
                        </div>
                    </Glasmorphosim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outlined={ true }
                        action={ () => setShowSection('soft-skills') }
                        text="Soft-Skills"
                        icon={ <FaPen /> }
                    />
                </HardSkills>
            }

            { showSection === 'soft-skills' &&
                <SoftSkills>
                    <Glasmorphosim>    
                        <h1>S<span>o</span>ft-Skills</h1>

                        <div>
                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <HiUserGroup color='#C7E87D' /> }
                                title='Liderança'
                                percentage={ 95 }
                            /> 

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <RiUserSettingsFill color='#FFFFFF' /> }
                                title='Flexível'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <HiEmojiHappy color='#4AAF4F' /> }
                                title='Positivo'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={<RiUserVoiceFill color='#4D4BCB' /> }
                                title='Bilíngue (Inglês)'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <FaRegClock color='#ED1D25' /> }
                                title='Lidar com prazo'
                                percentage={ 100 }
                            />
                        </div>
                    </Glasmorphosim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outlined={ true }
                        action={ () => setShowSection('myself') }
                        text="Me conheça"
                        icon={ <FaUserAlt /> }
                    />     
                </SoftSkills>
            }
        </ArticleWrapper>
    )
}

export default ResumePage