import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);
import {
    Wrapper, Section, Profile, Title, Picture,
    Information, Devices, Icons, Description,
    
}
from './styles'

const About = ()=>{
    return (
        <Wrapper id="about">
        <Section>

            <Profile>
                <Title>Conheça um pouco sobre mim</Title>
                <Picture src="./assets/img/profile.jpg" />
            </Profile>
            
            <Information>

                    <Devices>
                        <Icons>
                            <FontAwesomeIcon icon="desktop" style={{ width: "80px", height: "80px", }} />
                        </Icons>
                        <Icons>
                            <FontAwesomeIcon icon= "tablet-alt" style={{ width: "80px", height: "80px", }} />
                        </Icons>
                        <Icons>
                            <FontAwesomeIcon icon="mobile-alt" style={{ width: "80px", height: "80px", }} />
                        </Icons>
                    </Devices>

                    <Description>
                        Saudações visitante! Me chamo Luciene, e sou mais uma jovem que a tecnologia pegou pela mão e apresentou um novo mundo.
                        <br /> <br />
                        Atuo como desenvolvedora web e mobile front-end.
                        <br />
                        Tecnologias de conhecimento: <strong>Javascript, Typescript, ReactJs, React Native, NextJs, Dart, Flutter, GIT, HTML5 e CSS3.</strong>
                        <br />
                        Logo a baixo você encontra alguns trabalhos e projetos meus. Você pode vê-los, visitá-los e em alguns, até mesmo encontrar o <em>source code</em> no meu perfil do Github.
                        <br/>
                        Sinta-se a vontade também para <a href="#contact"><em>entrar em contato comigo</em></a>.
                    </Description>
                    <blockquote className="quote">
                        I will show you how great I am.
                        <br />
                        <span>Muhammad Ali</span>
                    </blockquote>

            </Information>

        </Section>
        </Wrapper>
    );
}

export default About;