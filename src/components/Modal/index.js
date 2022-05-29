import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faAngleRight,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
    Container, Close, Times, Info,
    Slider, Wrapper, Arrows, ActiveImg
} from './styles'

const Modal = ({
    showModal,
    setShowModal,
    slides,
}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.imgs.length;

    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides.imgs) || slides.imgs.length <= 0) {
        return null;
    }

    return (
        <>
            {showModal &&
                <Container>

                    <Close>
                        <Times onClick={() => setShowModal(!showModal)}>
                            <FontAwesomeIcon icon={faTimes} className="item" />
                        </Times>
                    </Close>

                    <Slider>
                        <Arrows>
                            <FontAwesomeIcon icon={faAngleLeft} className="arrow" onClick={prevImg} />
                        </Arrows>

                        <Wrapper>
                            {slides.imgs.map((elem, index) => {
                                return (
                                    <ActiveImg
                                        className={index === current ? "slide active" : "slide"}
                                        key={index}
                                    >
                                        {index === current && (<img src={elem.image} className="imgs" />)}
                                    </ActiveImg>
                                )
                            })}
                        </Wrapper>

                        <Arrows>
                            <FontAwesomeIcon icon={faAngleRight} className="arrow" onClick={nextImg} />
                        </Arrows>
                    </Slider>

                    <a
                        href={slides.url} target="_blank" rel="noreferrer">
                        <Info>{slides.label}</Info>
                    </a>

                </Container>
            }
        </>
    );
}

export default Modal;