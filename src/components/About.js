import React from "react";
import styled from "styled-components";

const About = ()=>{
    return (
        <>
            <Section>

            </Section>
        </>
    );
}

const Section = styled.div`
    width: 100%;
    height: 800px;
    position: relative;
    background-color: ${(props) => props.theme.colors.primary1};
`;

export default About;