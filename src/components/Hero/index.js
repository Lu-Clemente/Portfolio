import React from "react";
import {
    Painel, Navegation, Menu, Burger,
    Info, Left, Title, Subtitle,
    Resume, Button, Right, Code1,
    Code2, SvgCurve, HeaderCurve
} from './styles'

const Hero = () => {
    return (
        <Painel>

            <Navegation>
                <Menu>
                    <a href="#about"><li>Sobre</li></a>
                    <a href="#projects"><li>Projetos</li></a>
                    <li>Contato</li>
                </Menu>
                <Burger></Burger>
            </Navegation>

            <Info>

                <Left>
                    <Title>Luciene Clemente</Title>
                    <Subtitle>Desenvolvedora Front-end web e mobile</Subtitle>
                    <Resume>
                        <a href={"./assets/resume/Luciene-Clemente.pdf"} target="_blank" rel="noreferrer">
                            <Button>Currículo</Button>
                        </a>
                    </Resume>
                </Left>

                <Right>
                    <Code1>
                        Seja bem vindo(a) ao meu portifólio pessoal.
                        <br />
                        Aqui você poderá conhecer um pouquinho de mim e do meu trabalho.
                        <br />
                        Fique a vontade para me contactar em minhas redes sociais ou por email.
                    </Code1>
                    <Code2>
                        Seja bem vindo(a) ao meu portifólio. Conheça meu trabalho...
                    </Code2>
                </Right>

            </Info>

            <SvgCurve>
                <HeaderCurve>
                    <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </HeaderCurve>
            </SvgCurve>

        </Painel>
    );
}

export default Hero;