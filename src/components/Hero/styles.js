import styled from "styled-components";

export const Painel = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
`;

export const Info = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1440px) {
        width: 80vw;
        margin: 0 auto;
    }
`;

export const Navegation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 1440px) {
        width: 80%;
        margin:  0 auto;
    }
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 50%;
    font-size: 23px;
    font-family: ${(props) => props.theme.fonts.prymaryText};

    li {
        cursor: pointer;
        padding: 20px;

        &:hover {
            transform: scale(115%);
        }
    }

    @media ${(props) => props.theme.breakpoints.md} {
        /* display: none; */
    }
`;

export const Burger = styled.div`
    display: none;
    height: 40px;
    width: 40px;
    background-color: white;

    @media ${(props) => props.theme.breakpoints.md} {
        /* display: block; */
    }
`;

export const Left = styled.div`
    height: 450px;
    width: 45%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 50%;
    }
`;

export const Title = styled.h1`
    font-family: ${(props) => props.theme.fonts.prymaryTitle};
    font-size: 70px;
    color: #fff;
    margin-top: 20px;
    text-align: right;
    margin-bottom: 20px;

    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: ${(props) => props.theme.sizes.xxg};
    }

    @media screen and (max-width: 580px) {
        text-align: start;
        font-size: ${(props) => props.theme.sizes.xg};
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    text-align: right;
    font-size: 22px;

    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: ${(props) => props.theme.sizes.g};
    }

    @media screen and (max-width: 580px) {
        width: 80%;
        font-size: ${(props) => props.theme.sizes.m};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        text-align: left;
        font-size: ${(props) => props.theme.sizes.m};
    }
`;

export const ButtonsWrapper = styled.div`
    align-self: end;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 100px;
    width: 100%;
`;

export const LinkedIn = styled.div`
    border-radius: 20px;
    color: ${(props) => props.theme.colors.primary1};
`;

export const Resume = styled.div`
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.primary1};
    color: ${(props) => props.theme.colors.background1};
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
    cursor: pointer;
    font-weight: 500;

    .items {
        margin-right: 15px;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.primary1};
        color: ${(props) => props.theme.colors.background1};
        font-weight: 700;
        transition-duration: .4s;
        transform: scale(110%);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 0 auto;
        margin-top: 40px;
        height: 45px;
        width: 130px;
        font-size: ${(props) => props.theme.sizes.p};
        border-radius: 14px;
    }
`;

export const Right = styled.div`
    width: 35%;
    height: 450px;
    margin-right: 10%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 50%;
    }
`;

export const Code1 = styled.p`
    font-family: ${(props) => props.theme.fonts.codehide};
    width: 300px;
    line-height: 26px;
    font-size: ${(props) => props.theme.sizes.g};
    margin-top: 50px;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 20px;
        width: 90%;
        margin-left: 30px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
    }
`;

export const Code2 = styled.p`
    font-family: ${(props) => props.theme.fonts.codehide};
    width: 300px;
    line-height: 26px;
    font-size: ${(props) => props.theme.sizes.g};
    margin-top: 50px;
    display: none;

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 20px;
        width: 90%;
        margin-left: 30px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: inline;
        margin-top: 130px;
        font-size: ${(props) => props.theme.sizes.m};
        line-height: 17px;
    }
`;

export const SvgCurve = styled.div`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
`;

export const HeaderCurve = styled.svg`
    position: relative;
    display: block;
    width: calc(172% + 1.3px);
    height: 138px;
    transform: rotateY(180deg);

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 80px;
    }

    .shape-fill {
        fill: ${(props) => props.theme.colors.primary1};;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        height: 100px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 80px;
    }
`;