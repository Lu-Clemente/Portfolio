import styled from "styled-components";

export const Wrapper = styled.div`
    height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
        width: 80px;
        height: 80px;
    }
`;

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    text-align: center;
    margin: 55px 0;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80vw;
    height: 500px;
`;

export const Left = styled.div`
    height: 100%;
    width: 400px;
    width: 50%;
    /* background-color: crimson; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ImageSVG = styled.img`
    width: 260px;
    padding: 10px;
    transform: rotate(-10deg);
`;

export const Resume = styled.div`
    width: 210px;
    height: 60px;
    border-radius: 20px;
`;

export const Button = styled.div`
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

export const Right = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`;

export const ContactLink = styled.div`
    display: flex;
    gap: 15px;
    align-items: flex-end;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    padding: 15px 10px;
    padding-left: 20px;
    border-radius: 8px;

    &:hover {
        color: ${(props) => props.theme.colors.secundary1};
        filter: brightness(110%) contrast(140%) saturate(115%);
        transition-duration: .5s;
    }
`;

export const Link = styled.span`
    font-size: 25px;
    margin-bottom: 10px;
`;