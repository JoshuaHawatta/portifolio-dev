import { useState, useEffect } from 'react';
import { FaDatabase, FaTools, FaPen, FaUserAlt, FaFile } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiJava } from 'react-icons/si';
import { ArticleWrapper, HardSkills, LayoutContent, SoftSkills } from './Styles';

import STACK from '../../components/Stacks';
import CTA_BUTTON_JSX from '../../components/CtaButton';

import laptopImage from '../../assets/images/knowledges.jpg';
import aboutMeImage from '../../assets/images/about-me.jpg';


const ResumePage = () => {
    const [showSection, setShowSection] = useState('myself');

    return (
        <ArticleWrapper>
            <img src={ laptopImage } alt="stacks-knowledges" />
            
            { showSection === 'hard-skills' &&
                <HardSkills>
                    <LayoutContent>
                        <h1>H<span>a</span>rd-Skills</h1>
                              
                        <div>
                            <STACK
                                stackIcon={ <SiJavascript color='#F0DB4F' /> }
                                title="JavaScript"
                                percentage={ 95 }
                            />

                            <STACK
                                stackIcon={ <SiReact color='#61DBFB' /> }
                                title="React"
                                percentage={ 90 }
                            />

                            <STACK
                                stackIcon={ <SiHtml5 color='#e34c26' /> }
                                title="HTML"
                                percentage={ 100 }
                            />

                            <STACK
                                stackIcon={ <SiCss3 color='#2965f1' /> }
                                title="CSS"
                                percentage={ 95 }
                            />

                            <STACK
                                stackIcon={ <SiNodedotjs color='#68AD63' /> }
                                title="Node.js"
                                percentage={ 45 }
                            />

                            <STACK
                                stackIcon={ <FaDatabase color='#FFFFFF' /> }
                                title="SQL"
                                percentage={ 65 }
                            />

                            <STACK
                                stackIcon={ <SiJava color='#ED1D25' /> }
                                title="Java"
                                percentage={ 45 }
                            />
                        </div>
                    </LayoutContent>

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
                    <LayoutContent>    
                        <h1>S<span>o</span>ft-Skills</h1>
                    </LayoutContent>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outLined={ true }
                        action={ () => setShowSection('myself') }
                        text="Me conheça"
                        icon={ <FaUserAlt /> }
                    />
                </SoftSkills>
            }

            { showSection === 'myself' &&
                <SoftSkills>
                    <LayoutContent>    
                        <h1>Q<span>u</span>em eu sou</h1>

                        <div>
                            <img src={ aboutMeImage } alt="presenting-my-self" />

                            <div>
                                <p>
                                    Oi! Meu nome é Joshua Hawatta, tenho 19 anos e sou Programador Full-Stack, eu crio tanto o banco de dados, quanto a parte visual de uma aplicação-web.
                                </p>

                                <p>
                                    Isso significa que: se você tem uma ideia de site, blog, e-commerce e etc... Eu sou o cara para isso!
                                </p>

                                <p>
                                    Atualmente moro em Brasília, mas o Home-Office mudou totalmente a forma que trabalhamos. Então hoje, estou à uma mensagem de distância, seja lá qual for sua demanda!
                                </p>
                            </div>

                        </div>
                    </LayoutContent>

                    <CTA_BUTTON_JSX
                        btnWidth="40%"
                        outLined={ true }
                        action={ () => setShowSection('qualifications') }
                        text="Veja minhas Qualificações!"
                        icon={ <FaFile /> }
                    />
                </SoftSkills>
            }

            { showSection === 'qualifications' &&
                <SoftSkills>
                    <LayoutContent>    
                        <h1>Q<span>u</span>alificações</h1>
                    </LayoutContent>

                    <CTA_BUTTON_JSX
                        btnWidth="35%"
                        outLined={ true }
                        action={ () => setShowSection('hard-skills') }
                        text="Veja minhas Hard-Skills"
                        icon={ <FaTools /> }
                    />
                </SoftSkills>
            }
        </ArticleWrapper>
    )
}

export default ResumePage