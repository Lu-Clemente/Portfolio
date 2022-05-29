import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faGoogle, faCodepen } from '@fortawesome/free-brands-svg-icons';
import {
    Wrapper, Title, Flex, ImageSVG,
    Resume, Button, Left, Right,
    ContactLink, Link
} from './styles';

const linksData = [
    {
        icon: faLinkedinIn,
        link: "https://www.linkedin.com/in/luciene-clemente",
        label: "/luciene-clemente"
    },
    {
        icon: faGithub,
        link: "https://github.com/Lu-Clemente",
        label: "/Lu-Clemente"
    },
    {
        icon: faGoogle,
        link: "mailto:luclemente.dev@gmail.com",
        label: "luclemente.dev@gmail.com"
    },
    {
        icon: faCodepen,
        link: "https://codepen.io/Lu-Clemente",
        label: "/Lu-Clemente"
    },
]

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