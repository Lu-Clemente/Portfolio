import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import { 
    Wrapper, Title, Flex, ImageSVG,
    Resume, Button, Left, Right
} from './styles'

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

export default Contact;