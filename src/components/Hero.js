import React from "react";
import styled from "styled-components";


const Hero = ()=>{
    return (
        <Painel>

                <Navegation>
                    <Menu>
                        <a href="#about"><li>Sobre</li></a>
                        <li>Projetos</li>
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

const Painel = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
`;

const Info = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1440px) {
        width: 80vw;
        margin: 0 auto;
    }
`;

const Navegation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 1440px) {
        width: 80%;
        margin:  0 auto;
    }
`;

const Menu = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 50%;
    font-size: 23px;
    font-family: ${(props) => props.theme.fonts.prymaryText};

    li {
        cursor: pointer;
        padding: 20px;

        &:hover {
            transform: scale(115%);
        }
    }

    @media ${(props) => props.theme.breakpoints.md} {
        /* display: none; */
    }
`;

const Burger = styled.div`
    display: none;
    height: 40px;
    width: 40px;
    background-color: white;

    @media ${(props) => props.theme.breakpoints.md} {
        /* display: block; */
    }
`;

const Left = styled.div`
    height: 450px;
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 50%;
    }
`;

const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.prymaryTitle};
    font-size: 70px;
    color: #fff;
    margin-top: 20px;
    text-align: right;
    margin-bottom: 20px;

    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: ${(props) => props.theme.sizes.xxg};
    }

    @media screen and (max-width: 580px) {
        text-align: start;
        font-size: ${(props) => props.theme.sizes.xg};
    }
`;

const Subtitle = styled.p`
    width: 100%;
    text-align: right;
    font-size: 22px;

    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: ${(props) => props.theme.sizes.g};
    }

    @media screen and (max-width: 580px) {
        width: 80%;
        font-size: ${(props) => props.theme.sizes.m};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        text-align: left;
        font-size: ${(props) => props.theme.sizes.m};
    }
`;

const Resume = styled.div`
    width: 210px;
    height: 60px;
    border-radius: 20px;
    align-self: end;
    margin-right: 15%;
`;

const Button = styled.div`
    background-color: transparent;
    width: 210px;
    height: 60px;
    margin: 100px 0 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.sizes.gg};
    letter-spacing: 3px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.colors.primary1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary1};
        color: ${(props) => props.theme.colors.background1};
        font-weight: 700;
        transition-duration: .4s;
        transform: scale(110%);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 0 auto;
        margin-top: 40px;
        height: 45px;
        width: 130px;
        font-size: ${(props) => props.theme.sizes.p};
        border-radius: 14px;
    }
`;

const Right = styled.div`
    width: 35%;
    height: 450px;
    margin-right: 10%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* position: relative; */
    /* background-color: yellowgreen; */

    @media ${(props) => props.theme.breakpoints.md} {
        /* width: 50vw; */
        width: 50%;
    }
`;

const Code1 = styled.p`
    font-family: ${(props) => props.theme.fonts.codehide};
    width: 300px;
    line-height: 26px;
    font-size: ${(props) => props.theme.sizes.g};
    margin-top: 50px;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 20px;
        width: 90%;
        margin-left: 30px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

const Code2 = styled.p`
    font-family: ${(props) => props.theme.fonts.codehide};
    width: 300px;
    line-height: 26px;
    font-size: ${(props) => props.theme.sizes.g};
    margin-top: 50px;
    display: none;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 20px;
        width: 90%;
        margin-left: 30px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: inline;
        margin-top: 130px;
        font-size: ${(props) => props.theme.sizes.m};
        line-height: 17px;
    }
`;

const SvgCurve = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
`;

const HeaderCurve = styled.svg`
    position: relative;
    display: block;
    width: calc(172% + 1.3px);
    height: 138px;
    transform: rotateY(180deg);

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 80px;
    }

    .shape-fill {
        fill: ${(props) => props.theme.colors.primary1};;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        height: 100px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 80px;
    }
`;

export default Hero;