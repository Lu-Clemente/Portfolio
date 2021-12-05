import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

const About = ()=>{
    return (
        <Wrapper id="about">
        <Section>

            <Profile>

                <Title>
                    Conheça um pouco sobre mim
                </Title>
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
                        {/* <Icons>
                            <FontAwesomeIcon icon={ faGithub } style={{ width: "80px", height: "80px", }} />
                        </Icons> */}
                    </Devices>

                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Description>
                    <blockquote className="quote">
                        "I will show you how great I am."
                        <br />
                        <span>Muhammad Ali</span>
                    </blockquote>

            </Information>

        </Section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary1};
`;

const Section = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1080px) {
        height: fit-content;
    }
`;

const Profile = styled.div`
    height: 500px;
    width: 30%;
    width: 350px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 580px) {
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        width: 70vw;
    }
`;

const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xg};
    color: #000;
    text-align: center;
    margin: 20px 20px 0 40px;
`;

const Picture = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: 0 -50px;
    border-radius: 50%;

    @media ${(props) => props.theme.breakpoints.lg} {
        transform: scale(80%);
    }
`;

const Information = styled.div`
    width: 60%;
    height: 500px;
    margin: 0 40px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    .quote {
        color: #FFFFFF;
        text-align: end;
        font-size: ${(props) => props.theme.sizes.g};
        font-weight: 500;
        margin: 50px 40px 0 0;
        text-shadow: 2px 2px 10px rgba(0,0,0,.65);
    }

    .quote span {
        font-size: ${(props) => props.theme.sizes.p};
    }

    @media screen and (max-width: 1080px) {
        margin-top: 0;
        width: 80%;
        height: fit-content;
        margin-bottom: 50px;
    }
`;

const Devices = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    justify-content: space-around;
`;

const Icons = styled.div`
    width: 80px;
    height: 80px;
    color: ${(props) => props.theme.colors.background1};
`;

const Description = styled.p`
    width: 90%;
    height: fit-content;
    margin: 0 auto;
    margin-top: 50px;
    text-align: justify;
    color: ${(props) => props.theme.colors.background1};
    font-size: ${(props) => props.theme.sizes.m};
    line-height: 30px;
`;

export default About;