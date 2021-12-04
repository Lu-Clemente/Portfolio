import React from "react";
import styled from "styled-components";

const Projects = ()=>{
    return (
        <Section>

        </Section>
    );
}

const Section = styled.div`
    width: 100%;
    height: 600px;
    background-color: ${(props) => props.theme.colors.background1};
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`;

const Profile = styled.div`
    height: 500px;
    width: 40%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
`;

const Information = styled.div`
    width: 70%;
    height: 500px;
    margin: 0 40px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
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
    width: 80%;
    height: fit-content;
    margin: 0 auto;
    margin-top: 50px;
    text-align: justify;
    color: ${(props) => props.theme.colors.background1};
    font-size: ${(props) => props.theme.sizes.m};
    line-height: 30px;
`;

export default Projects;