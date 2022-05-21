import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary1};
`;

export const Section = styled.div`
    width: 100vw;
    height: 600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1080px) {
        height: fit-content;
    }
`;

export const Profile = styled.div`
    height: 500px;
    width: 30%;
    width: 350px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 580px) {
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        width: 70vw;
    }
`;

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xg};
    color: ${(props) => props.theme.colors.secundary1};
    text-align: center;
    margin: 20px 20px 0 40px;
`;

export const Picture = styled.img`
    height: 300px;
    width: 300px;
    object-fit: cover;
    object-position: 0 -50px;
    border-radius: 50%;
    /* border: 2px solid ${(props) => props.theme.colors.secundary1}; */
    box-shadow: 5px 5px 10px ${(props) => props.theme.colors.background1};

    @media ${(props) => props.theme.breakpoints.lg} {
        transform: scale(80%);
    }
`;

export const Information = styled.div`
    width: 60%;
    height: 500px;
    margin: 0 40px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    .quote {
        color: ${(props) => props.theme.colors.background1};
        text-align: end;
        font-size: ${(props) => props.theme.sizes.g};
        font-weight: 500;
        margin: 40px 40px 10px 0;
        /*text-shadow: 2px 2px 10px rgba(0,0,0,.65);*/
    }

    .quote span {
        font-size: ${(props) => props.theme.sizes.p};
    }

    @media screen and (max-width: 1080px) {
        margin-top: 0;
        width: 80%;
        height: fit-content;
        margin-bottom: 50px;
    }
`;

export const Devices = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    justify-content: space-around;
`;

export const Icons = styled.div`
    width: 80px;
    height: 80px;
    color: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.secundary1};
`;

export const Description = styled.p`
    width: 90%;
    height: fit-content;
    margin: 0 auto;
    margin-top: 50px;
    text-align: justify;
    color: ${(props) => props.theme.colors.background1};
    font-size: ${(props) => props.theme.sizes.m};
    line-height: 28px;
`;