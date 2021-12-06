import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Proj from "./Modal2";

const Modal2 = (
    {showModal,setShowModal}
)=>{

    return (
        <>
            {showModal ? 
            <Modal>
                <Close>
                    <Times onClick={ ()=>setShowModal(!showModal) }>
                        <FontAwesomeIcon icon={ faTimes } className="item" />
                    </Times>
                </Close>
                <Slider />
            </Modal>
            :
            null
            }
        </>
    );
}

const Modal = styled.div`
    height: 80vh;
    width: 80vw;
    background-color: rgba(0,0,0,.9);
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;
const Close = styled.div`
    width: 80vw;
    display: flex;
    justify-content: end;
`;

const Times = styled.div`
    height: fit-content;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary1};;

    .item {
        width: 40px;
        height: 40px;
    }

    &:hover {
        color: #FFFFFF;
        transition-duration: .5s;
    }
`;

const Slider = styled.div`
    height: 300px;
    width: 300px;
    background-color: blueviolet;
`;

export default Modal2;