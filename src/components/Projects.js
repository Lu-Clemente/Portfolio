import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SVG from "./SVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHtml5,
    faCss3Alt,
    faReact,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import { SliderData, SliderData2, SliderData3, SliderData4, SliderData5 } from "./SliderData";

const Projects = ()=>{

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const openModal1 = ()=>{
        setIsOpen1(!isOpen1);
    }
    const openModal2 = ()=>{
        setIsOpen2(!isOpen2);
    }
    const openModal3 = ()=>{
        setIsOpen3(!isOpen3);
    }
    const openModal4 = ()=>{
        setIsOpen4(!isOpen4);
    }
    const openModal5 = ()=>{
        setIsOpen5(!isOpen5);
    }

    return (
        <>
            <Wrapper id="projects">

                <Title>Portfólio</Title>

                <Container>
                    <Proj1 onClick={ openModal1 }>
                        {/* <ProjectName>HTML, CSS & JavaScript</ProjectName> */}
                        <ImageSVG src="./assets/img/undraw_web_developer.svg" id="svg-proj1" />
                            <Icons className="group">
                                <FontAwesomeIcon icon={ faHtml5 } className="items items-respons" />
                                <FontAwesomeIcon icon={ faCss3Alt } className="items items-respons"  />
                                <FontAwesomeIcon icon={ faJsSquare } className="items items-respons"  />
                            </Icons>
                    </Proj1>
                    <Proj2 onClick={ openModal2 }>
                        {/* <ProjectName>ReactJs</ProjectName> */}
                        <ImageSVG src="./assets/img/undraw_shared_workspace.svg" id="svg-proj2" />
                        <Icons>
                            <FontAwesomeIcon icon={ faReact } className="items" />
                        </Icons>
                    </Proj2>
                    <Proj3 onClick={ openModal3 }>
                        {/* <ProjectName>Flutter</ProjectName> */}
                        <ImageSVG src="./assets/img/undraw_mobile_app.svg" />
                        <Icons>
                            <img id="flutter-green" src="./assets/img/flutter.png" />
                            <img id="flutter-black" src="./assets/img/flutter-bk-black.png" />
                        </Icons>
                    </Proj3>
                    <Proj4 onClick={ openModal4 }>
                        {/* <ProjectName>React Native</ProjectName> */}
                        <ImageSVG src="./assets/img/undraw_programmer.svg" />
                        <Icons>
                            <FontAwesomeIcon icon={ faReact } className="items" />
                        </Icons>
                    </Proj4>
                    <Proj5 onClick={ openModal5 }>
                        <ImageSVG src="./assets/img/undraw_about_me.svg" />
                        {/* <ProjectName>NextJs</ProjectName> */}
                        <Icons>
                            <SVG />
                            {/* <FontAwesomeIcon icon={ faGithub } style={{ width: "80px", height: "80px", }} /> */}
                        </Icons>
                    </Proj5>
                </Container>
                
                <Modal1 showModal={ isOpen1 } setShowModal={ setIsOpen1 } slides={ SliderData } />
                <Modal2 showModal={ isOpen2 } setShowModal={ setIsOpen2 } slides={ SliderData2 } />
                <Modal3 showModal={ isOpen3 } setShowModal={ setIsOpen3 }  slides={ SliderData3 } />
                <Modal4 showModal={ isOpen4 } setShowModal={ setIsOpen4 } slides={ SliderData4 } />
                <Modal5 showModal={ isOpen5 } setShowModal={ setIsOpen5 } slides={ SliderData5 } />

            </Wrapper>
            
        </>
    );
}

const ImageSVG = styled.img`
    width: 220px;
    /* margin: 5px; */
    padding: 10px;

    @media screen and (max-width: 1180px) {
        width: 90%;
    }
`;

const Wrapper = styled.div`
    margin: 80px 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.background1};
    position: relative;
`;

const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    text-align: center;
    margin: 55px 0;
`;

const Icons = styled.div`
    height: 50px;
    width: fit-content;

    .items {
        width: 50px;
        height: 50px;
        margin: 0 5px;
        margin-top: 20px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        .items-respons {
            width: 20px !important; 
            height: 20px !important;
        }
        .items {
            margin: 0;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        .items {
            width: 30px;
            height: 30px;
            /* margin-top: 10px;
            margin-bottom: 10px; */
        }
    }
`;

const Container = styled.div`
    margin: 0 auto;
    width: 75vw;
    height: 80vh;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.3em 1.3em;
    grid-template-areas:
        "Proj1 Proj1 Proj2"
        "Proj3 Proj4 Proj2"
        "Proj3 Proj4 Proj5";

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 300px;
    }
`;
    
const Proj1 = styled.div`
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    grid-area: Proj1;
    color: ${(props) => props.theme.colors.primary1};

    #svg-proj1 {
        width: 160px;

        @media ${(props) => props.theme.breakpoints.sm} {
            width: 100px;
        }
    }

    .group {
        display: flex;

        @media ${(props) => props.theme.breakpoints.sm} {
            flex-direction: column;
            justify-content: center;
        }
    }

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: ${(props) => props.theme.colors.background1};
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }

    /* @media screen and (max-width: 1180px) {
        flex-direction: column;
        justify-content: center;
    } */
`;
const Proj2 = styled.div`
    grid-area: Proj2;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }
`;
const Proj3 = styled.div`
    grid-area: Proj3;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    #flutter-green, #flutter-black {
        width: 50px;
        height: 50px;
        margin-top: 40px;
    }

    #flutter-black {
        display: none;
    }

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};

        #flutter-green {
            display: none;
        }
        #flutter-black {
            display: block;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        #flutter-green, #flutter-black {
            width: 30px;
            height: 30px;
            margin-top: 20px;
        }
    }
`;
const Proj4 = styled.div`
    grid-area: Proj4;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }
`;

const Proj5 = styled.div`
    grid-area: Proj5;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
        
        SVG g{
            fill: #000000;
        }

        SVG path{
            fill: #000000;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {

        SVG{
            width: 30px;
            height: 30px;
        }
    }
`;

const ProjectName = styled.span`
    color: #FFF;
    padding: 10px;
    text-align: center;
`;

export default Projects;