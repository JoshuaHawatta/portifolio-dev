import { useState } from 'react';

//REACT_ICONS
import { FaDatabase, FaTools, FaPen, FaUserAlt, FaWeightHanging } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiJava } from 'react-icons/si';
import { RiUserVoiceFill, RiUserSettingsFill } from 'react-icons/ri';
import { HiUserGroup, HiEmojiHappy } from 'react-icons/hi';

import { ArticleWrapper, HardSkills, Glasmorphisim, SoftSkills, MySelf } from './Styles';

import ICON_WITH_TEXT_JSX from '../../components/IconWithText';
import CTA_BUTTON_JSX from '../../components/CtaButton';

import laptopImage from '../../assets/images/knowledges.jpg';
import aboutMeImage from '../../assets/images/about-me.jpg';

const ResumePage = () => {
    const [showSection, setShowSection] = useState('myself');

    return (
        <ArticleWrapper>
            <img src={ laptopImage } alt="stacks-knowledges" />

            { showSection === 'myself' &&
                <MySelf>
                    <Glasmorphisim>
                        <h1>Q<span>u</span>em eu sou</h1>

                        <div>
                            <img src={ aboutMeImage } alt="presenting-my-self" />

                            <div>
                                <p>
                                    Oi! Meu nome é Joshua Hawatta, tenho 19 anos e sou Programador Full-Stack. Eu crio tanto o banco de dados, quanto a parte visual de uma aplicação-web.
                                </p>

                                <p>
                                    Isso significa que: se você tem uma ideia de site, blog, landing-page, etc... Eu sou o cara para isso!
                                </p>

                                <p>
                                    Atualmente moro em Brasília, mas o Home-Office mudou totalmente a forma que trabalhamos, então hoje estou à uma mensagem de distância, seja lá qual for sua demanda!
                                </p>
                            </div>
                        </div>
                    </Glasmorphisim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outLined={ true }
                        action={ () => setShowSection('hard-skills') }
                        text="Veja minhas Hard-Skills!"
                        icon={ <FaTools /> }
                    />
                </MySelf>
            }
            
            { showSection === 'hard-skills' &&
                <HardSkills>
                    <Glasmorphisim>
                        <h1>H<span>a</span>rd-Skills</h1>                           
                                               
                        <div>
                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiJavascript color='#F0DB4F' /> }
                                title='JavaScript'
                                percentage={ 95 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <SiReact color='#61DBFB' /> }
                                title='React'
                                percentage={ 90 }
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
                                percentage={ 45 }
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
                    </Glasmorphisim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outLined={ true }
                        action={ () => setShowSection('soft-skills') }
                        text="Veja minhas Soft-Skills!"
                        icon={ <FaPen /> }
                    />
                </HardSkills>
            }

            { showSection === 'soft-skills' &&
                <SoftSkills>
                    <Glasmorphisim>    
                        <h1>S<span>o</span>ft-Skills</h1>

                        <div>
                            <ICON_WITH_TEXT_JSX
                                stackIcon={<RiUserVoiceFill color='#2a69f1' /> }
                                title='Inglês'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <HiUserGroup color='#e7d63e' /> }
                                title='Comunicação'
                                percentage={ 90 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <FaWeightHanging color='#d1140d' /> }
                                title='Lidar com pressão'
                                percentage={ 95 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={ <HiEmojiHappy color='#4aaf4f' /> }
                                title='Atitude Positiva'
                                percentage={ 100 }
                            />

                            <ICON_WITH_TEXT_JSX
                                stackIcon={<RiUserSettingsFill color='#FFFFFF' /> }
                                title='Adaptabilidade'
                                percentage={ 100 }
                            />
                        </div>
                    </Glasmorphisim>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outLined={ true }
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