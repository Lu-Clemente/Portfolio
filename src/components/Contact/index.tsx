import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Wrapper, Title, Flex, ImageSVG,
    Resume, Button, Left, Right,
    ContactLink, Link
} from './styles';
import { linksData } from "../../Data/LinksData";

const Contact = () => {

    return (
        <Wrapper id="contact">
            <Title>Entre em contato</Title>
            <Flex>
                <Left>

                    <ImageSVG src="./assets/img/undraw_message.svg" />

                    <Resume>
                        <a href={"./assets/resume/Luciene-Clemente.pdf"} target="_blank" rel="noreferrer">
                            <Button>Currículo</Button>
                        </a>
                    </Resume>

                </Left>
                <Right>
                    {
                        linksData.map((elem, index) => (
                            <a href={elem.link} target="_blank" rel="noreferrer" key={index}>
                                <ContactLink>
                                    <FontAwesomeIcon icon={elem.icon} className="item" />
                                    <Link>{elem.label}</Link>
                                </ContactLink>
                            </a>
                        ))
                    }
                </Right>
            </Flex>
        </Wrapper>
    );
}

export default Contact;