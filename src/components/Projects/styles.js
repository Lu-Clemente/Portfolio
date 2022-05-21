import styled from "styled-components";

export const ImageSVG = styled.img`
    width: 220px;
    /* margin: 5px; */
    padding: 10px;

    @media screen and (max-width: 1180px) {
        width: 90%;
    }
`;

export const Wrapper = styled.div`
    margin: 80px 0;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.background1};
    position: relative;
`;

export const Title = styled.h2`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.sizes.xxg};
    text-align: center;
    margin: 55px 0;
`;

export const Icons = styled.div`
    height: 50px;
    width: fit-content;

    .items {
        width: 50px;
        height: 50px;
        margin: 0 5px;
        margin-top: 20px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        .items-respons {
            width: 20px !important; 
            height: 20px !important;
        }
        .items {
            margin: 0;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        .items {
            width: 30px;
            height: 30px;
            /* margin-top: 10px;
            margin-bottom: 10px; */
        }
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 75vw;
    height: 80vh;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.3em 1.3em;
    grid-template-areas:
        "Proj1 Proj1 Proj2"
        "Proj3 Proj4 Proj2"
        "Proj3 Proj4 Proj5";

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 300px;
    }
`;
    
export const Proj1 = styled.div`
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    grid-area: Proj1;
    color: ${(props) => props.theme.colors.primary1};

    #svg-proj1 {
        width: 160px;

        @media ${(props) => props.theme.breakpoints.sm} {
            width: 100px;
        }
    }

    .group {
        display: flex;

        @media ${(props) => props.theme.breakpoints.sm} {
            flex-direction: column;
            justify-content: center;
        }
    }

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: ${(props) => props.theme.colors.background1};
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }

    /* @media screen and (max-width: 1180px) {
        flex-direction: column;
        justify-content: center;
    } */
`;
export const Proj2 = styled.div`
    grid-area: Proj2;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }
`;
export const Proj3 = styled.div`
    grid-area: Proj3;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    #flutter-green, #flutter-black {
        width: 50px;
        height: 50px;
        margin-top: 40px;
    }

    #flutter-black {
        display: none;
    }

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};

        #flutter-green {
            display: none;
        }
        #flutter-black {
            display: block;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        #flutter-green, #flutter-black {
            width: 30px;
            height: 30px;
            margin-top: 20px;
        }
    }
`;
export const Proj4 = styled.div`
    grid-area: Proj4;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};

    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
    }
`;

export const Proj5 = styled.div`
    grid-area: Proj5;
    border: 2px solid ${(props) => props.theme.colors.secundary1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        transition-duration: .8s;
        background-color: #2CE8A3;
        color: black;
        border: 2px solid ${(props) => props.theme.colors.primary1};
        
        SVG g{
            fill: #000000;
        }

        SVG path{
            fill: #000000;
        }
    }

    @media ${(props) => props.theme.breakpoints.sm} {

        SVG{
            width: 30px;
            height: 30px;
        }
    }
`;