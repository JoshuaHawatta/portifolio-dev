import { useState } from 'react';
import STACK from '../../components/Stacks';
import { FaDatabase, FaTools, FaPen, FaUserAlt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiNodedotjs, SiJava } from 'react-icons/si';
import CTA_BUTTON_JSX from '../../components/CtaButton';
import { ArticleWrapper, HardSkills, LayoutContent, SoftSkills } from './Styles';
import laptopImage from '../../assets/images/knowledges.jpg';

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