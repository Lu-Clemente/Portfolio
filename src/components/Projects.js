import React from "react";
import styled from "styled-components";
import SVG from "./SVG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHtml5,
    faCss3Alt,
    faReact,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';

const Projects = ()=>{
    return (
        <Wrapper>
            <Container>
                <Proj1>
                    <ProjectName>Pure HTML, CSS & JavaScript</ProjectName>
                        <Icons>
                            <FontAwesomeIcon icon={ faHtml5 } className="items" />
                            <FontAwesomeIcon icon={ faCss3Alt } className="items" />
                            <FontAwesomeIcon icon={ faJsSquare } className="items" />
                        </Icons>
                </Proj1>
                <Proj2>
                    <ProjectName>ReactJs</ProjectName>
                    <Icons>
                        <FontAwesomeIcon icon={ faReact } className="items" />
                    </Icons>
                </Proj2>
                <Proj3>
                    <ProjectName>Flutter</ProjectName>
                    <Icons>
                        <img id="flutter-green" src="./assets/img/flutter.png" />
                        <img id="flutter-black" src="./assets/img/flutter-bk-black.png" />
                    </Icons>
                </Proj3>
                <Proj4>
                    <ProjectName>React Native</ProjectName>
                    <Icons>
                        <FontAwesomeIcon icon={ faReact } className="items" />
                    </Icons>
                </Proj4>
                <Proj5>
                    <ProjectName>NextJs</ProjectName>
                    <Icons>
                        <SVG />
                        {/* <FontAwesomeIcon icon={ faGithub } style={{ width: "80px", height: "80px", }} /> */}
                    </Icons>
                </Proj5>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 80px 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.background1};
`;

const Icons = styled.div`
    height: fit-content;
    width: fit-content;

    .items {
        width: 80px;
        height: 80px;
        margin: 0 5px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        .items {
            width: 50px;
        }
    }
    
`;

const Container = styled.div`
    margin: 0 auto;
    width: 75vw;
    height: 520px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 1.3em 1.3em; 
    grid-template-areas: 
        "Proj1 Proj1 Proj2"
        "Proj3 Proj4 Proj2"
        "Proj3 Proj4 Proj5";
`;
    
const Proj1 = styled.div`
    border: 2px solid ${(props) => props.theme.colors.primary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    grid-area: Proj1;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: ${(props) => props.theme.colors.background1};
    }
`;
const Proj2 = styled.div`
    grid-area: Proj2;
    border: 2px solid ${(props) => props.theme.colors.primary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black
    }
`;
const Proj3 = styled.div`
    grid-area: Proj3;
    border: 2px solid ${(props) => props.theme.colors.primary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    #flutter-green, #flutter-black {
        width: 80px;
    }

    #flutter-black {
        display: none;
    }

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;

        #flutter-green {
            display: none;
        }
        #flutter-black {
            display: block;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        #flutter-green, #flutter-black {
            width: 50px;
        }
    }
`;
const Proj4 = styled.div`
    grid-area: Proj4;
    border: 2px solid ${(props) => props.theme.colors.primary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black
    }
`;
const Proj5 = styled.div`
    grid-area: Proj5;
    border: 2px solid ${(props) => props.theme.colors.primary1};
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
        
        SVG g{
            fill: #000000;
        }

        SVG path{
            fill: #000000;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {

        SVG{
            width: 60px;
        }
    }
`;

const ProjectName = styled.span`
    color: #FFF;
    padding: 10px;
    text-align: center;
`;

export default Projects;