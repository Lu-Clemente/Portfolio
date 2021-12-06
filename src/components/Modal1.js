import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faAngleRight,
    faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { SliderData } from "./SliderData";

const Modal1 = ({showModal,setShowModal,slides})=>{

    const[current,setCurrent] = useState(0);
    const length = slides.length;

    const nextImg = ()=>{
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevImg = ()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            {showModal ?
            <Modal>

                <Close>
                    <Times onClick={ ()=>setShowModal(!showModal) }>
                        <FontAwesomeIcon icon={ faTimes } className="item" />
                    </Times>
                </Close>

                <Slider>
                    <Arrows>
                        <FontAwesomeIcon icon={ faAngleLeft } className="arrow" onClick={ prevImg } />
                    </Arrows>
                    
                    <Wrapper>
                    {SliderData.map((slide,index)=>{
                        return (
                            <ActiveImg
                                className={ index === current ? "slide active" : "slide" }
                                key={index}
                            >
                                { index === current && (<img src={slide.image} className="imgs" />) }
                            </ActiveImg>
                        )
                    })}

                    </Wrapper>

                    <Arrows>
                        <FontAwesomeIcon icon={ faAngleRight } className="arrow" onClick={ nextImg } />
                    </Arrows>
                </Slider>

                <a
                href="https://www.unor.com.br/" target="_blank" rel="noreferrer">
                    <Info>Landing Page Unor - www.unor.com.br</Info>
                </a>

            </Modal>
            :
            null
            }
        </>
    );
}

const Modal = styled.div`
    height: 550px;
    width: 70vw;
    background-color: rgba(0,0,0,.97);
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`;
const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

const Times = styled.div`
    height: fit-content;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    .item {
        width: 35px;
        height: 35px;
    }

    &:hover {
        transform: scale(112%);
        transition-duration: .5s;
    }
`;

const Info = styled.p`
    text-align: center;
    margin-bottom: 20px;
    color: #FFFFFF;
    font-family: ${(props) => props.theme.fonts.prymaryText};
    font-size: ${(props) => props.theme.sizes.g};
`;

const Slider = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;

    .arrow {
        width: 80px;
        height: 80px;
        color: ${(props) => props.theme.colors.secundary1};

        &:hover {
            transform: scale(108%);
            transition-duration: .3s;
        }
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }

    .imgs {
        max-width: 650px;
        max-height: 400px;
    }
`;

const Wrapper = styled.div`
    width: 650px;
    height: 400px;
`;

const Arrows = styled.div`
    height: 80px;
    width: 80px;
    cursor: pointer;
`;

const ActiveImg = styled.div`
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Modal1;