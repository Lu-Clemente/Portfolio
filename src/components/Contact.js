import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faAngleRight
} from '@fortawesome/free-solid-svg-icons';

const Contact = ()=>{

    return (
        <Wrapper id="contact">
            <Title>Entre em contato</Title>
            <Flex>
                <Left>

                    {/* <FontAwesomeIcon icon={ faEnvelopeOpen } className="item" /> */}
                    <ImageSVG src="./assets/img/undraw_message.svg" />

                    <Resume>
                        <a href={"./assets/resume/Luciene-Clemente.pdf"} target="_blank" rel="noreferrer">
                            <Button>Currículo</Button>
                        </a>
                    </Resume>

                </Left>
                <Right>
                </Right>
            </Flex>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
        width: 150px;
        height: 150px;
    }
`;

const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    text-align: center;
    margin: 55px 0;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80vw;
    height: 500px;
`;

const Left = styled.div`
    height: 100%;
    width: 400px;
    width: 50%;
    /* background-color: crimson; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ImageSVG = styled.img`
    width: 260px;
    padding: 10px;
    transform: rotate(-10deg);
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

`;

const Right = styled.div`
    height: 100%;
    width: 400px;
    width: 50%;
    /* background-color: dodgerblue; */
`;

export default Contact;