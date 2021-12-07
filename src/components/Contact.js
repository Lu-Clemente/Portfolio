import React from "react";
import styled from "styled-components";

const Contact = ()=>{

    return (
        <Wrapper id="contact">
            <Title>Entre em contato</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 700px;
    width: 100%;
`;

const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    text-align: center;
    margin: 55px 0;
`;

export default Contact;