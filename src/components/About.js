import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

const About = ()=>{
    return (
        <Section>
                {/* <div style={{ height: "200px", width: "200px", backgroundColor: "white", display: "flex" }}>
                    <FontAwesomeIcon icon= "tablet-alt" />
                    <FontAwesomeIcon icon={ faGithub } />
                </div> */}
            <Title>
            </Title>
        </Section>
    );
}

const Section = styled.div`
    width: 100%;
    height: 800px;
    position: relative;
    background-color: ${(props) => props.theme.colors.primary1};
`;

const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.gg};
    color: #FFFFFF;
`;

export default About;