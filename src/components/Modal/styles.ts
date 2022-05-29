import styled from "styled-components";

export const Container = styled.div`
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
export const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;

export const Times = styled.div`
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

export const Info = styled.p`
    text-align: center;
    margin-bottom: 20px;
    color: #FFFFFF;
    font-family: ${(props) => props.theme.fonts.prymaryText};
    font-size: ${(props) => props.theme.sizes.g};
`;

export const Slider = styled.div`
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

export const Wrapper = styled.div`
    width: 650px;
    height: 400px;
`;

export const Arrows = styled.div`
    height: 80px;
    width: 80px;
    cursor: pointer;
`;

export const ActiveImg = styled.div`
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;