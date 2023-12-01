import styled from "styled-components";
import { motion } from "framer-motion";

export const CardCategory = styled(motion.div)`

    display:flex;
    flex-direction:column;
    width:150px;
    justify-content:center;
    text-align:center;
    padding:2rem 0.5rem;
    background-color: ${({selected}) =>  selected ? "var(o--orange" : ":var(--gray-bg)"};
    border-radius:15px;
    cursor:pointer;
    h2{
        font-size: 1rem;
    }
    :first-child{
        img{
            padding:7px;;

        }
    }
    @media (max-width:768px) {
        padding-top:30px;
        text-align:center;
    }
`

export const BorderDecoration = styled.div`

    height: 5px;
    width:30%;
    background-color: var(--btn-gradient);
    border-radius:15px;
    
`


