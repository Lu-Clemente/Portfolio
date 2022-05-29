import React, { useState } from "react";
import SVG from "../SVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHtml5,
    faCss3Alt,
    faReact,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
    ImageSVG, Wrapper, Title, Icons,
    Container, Proj1, Proj2, Proj3,
    Proj4, Proj5
} from './styles';
import { SliderData } from "../SliderData";
import Modal from "../Modal";

const Projects = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(1);

    const openModal = (i) => {
        setIsOpen(!isOpen);
        setSliderIndex(i);
    }

    const handleSlider = () => {
        switch (sliderIndex) {
            case 1:
                return SliderData[0];
            case 2:
                return SliderData[1];
            case 3:
                return SliderData[2];
            case 4:
                return SliderData[3];
            case 5:
                return SliderData[4];
        }
    }

    React.useEffect(() => {
        console.log(isOpen);
        console.log(sliderIndex);
        console.log(handleSlider());
    }, [sliderIndex, isOpen])

    return (
        <>
            <Wrapper id="projects">

                <Title>Portfólio</Title>

                <Container>
                    <Proj1 onClick={() => openModal(1)}>
                        <ImageSVG src="./assets/img/undraw_web_developer.svg" id="svg-proj1" />
                        <Icons className="group">
                            <FontAwesomeIcon icon={faHtml5} className="items items-respons" />
                            <FontAwesomeIcon icon={faCss3Alt} className="items items-respons" />
                            <FontAwesomeIcon icon={faJsSquare} className="items items-respons" />
                        </Icons>
                    </Proj1>
                    <Proj2 onClick={() => openModal(2)}>
                        <ImageSVG src="./assets/img/undraw_shared_workspace.svg" id="svg-proj2" />
                        <Icons>
                            <FontAwesomeIcon icon={faReact} className="items" />
                        </Icons>
                    </Proj2>
                    <Proj3 onClick={() => openModal(3)}>
                        <ImageSVG src="./assets/img/undraw_mobile_app.svg" />
                        <Icons>
                            <img id="flutter-green" src="./assets/img/flutter.png" />
                            <img id="flutter-black" src="./assets/img/flutter-bk-black.png" />
                        </Icons>
                    </Proj3>
                    <Proj4 onClick={() => openModal(4)}>
                        <ImageSVG src="./assets/img/undraw_programmer.svg" />
                        <Icons>
                            <FontAwesomeIcon icon={faReact} className="items" />
                        </Icons>
                    </Proj4>
                    <Proj5 onClick={() => openModal(5)}>
                        <ImageSVG src="./assets/img/undraw_about_me.svg" />
                        <Icons>
                            <SVG />
                            {/* <FontAwesomeIcon icon={ faGithub } style={{ width: "80px", height: "80px", }} /> */}
                        </Icons>
                    </Proj5>
                </Container>

                <Modal
                    showModal={isOpen}
                    setShowModal={setIsOpen}
                    slides={handleSlider()}
                />

            </Wrapper>

        </>
    );
}

export default Projects;