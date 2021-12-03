import React from "react";
import styled from "styled-components";

const Hero = ()=>{
    return (
        <>
            <Painel>
                <Info>
                    <Title>Luciene Clemente</Title>
                    <Subtitle>Desenvolvedora Front-end web e mobile</Subtitle>
                    <Resume>
                        <a href={"./assets/resume/Luciene-Clemente.pdf"} target="_blank" rel="noreferrer">
                            <Button>Currículo</Button>
                        </a>
                    </Resume>
                </Info>
                <Right>
                    {/* <Profile src="./assets/img/profile.jpg" /> */}
                </Right>
                {/* <Curve /> */}
                
                <SvgCurve>
                    <HeaderCurve>
                        <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </HeaderCurve>
                </SvgCurve>
            </Painel>
        </>
    );
}

const Painel = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Info = styled.div`
    height: 450px;
    width: 35%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    color: #fff;
    margin-top: 50px;
    text-align: right;
`;

const Subtitle = styled.p`
    width: 100%;
    text-align: right;
    font-size: ${(props) => props.theme.sizes.m};

    @media screen and (max-width: 520px) {
        text-align: left;
    }
`;

const Resume = styled.div`
    width: 210px;
    height: 60px;
    border-radius: 20px;
`;

const Button = styled.div`
    background-color: transparent;
    width: 210px;
    height: 60px;
    margin: 110px 0 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.sizes.g};
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.colors.primary1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary1};
        color: #FFF;
        transition-duration: .4s;
    }

    @media screen and (max-width: 520px) {
        margin-top: 40px;
        margin-left: 0;
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
    /* background-color: blueviolet; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
`;

const Profile = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: 0 -50px;
    border-radius: 50%;
    position: absolute;
`;

const Curve = styled.div`
    position: absolute;
    height: 225px;
    width: 100%;
    bottom: 0;

    &::before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 55%;
        height: 100%;
        background-color: #121212;
        transform: translate(85%, 60%);
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 55%;
        height: 100%;
        background-color: teal;
        transform: translate(-4%, 40%);
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

    @media screen and (max-width: 520px) {
        height: 80px;
    }

    .shape-fill {
        fill: ${(props) => props.theme.colors.primary1};;
    }
`;

export default Hero;