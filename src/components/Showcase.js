import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Showcase = ({showModal,setShowModal})=>{

    return (
        <>
            {showModal ? 
            <Modal>
                <Close>
                    <Times onClick={ ()=>setShowModal(!showModal) }>
                        <FontAwesomeIcon icon={ faTimes } className="item" />
                    </Times>
                </Close>
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
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    /* display: none; */
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
    color: #FFF;

    .item {
        width: 40px;
        height: 40px;
    }

    &:hover {
        color: unset;
        transition-duration: .5s;
    }
`;

export default Showcase;