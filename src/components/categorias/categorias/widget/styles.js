import styled from "styled-components"


export const CategoriasWrapper = styled.div`

display:flex;
flex-direction:column;



width:100%;

@media (max-width:768px) {
    
    text-align: center;
}

`
export const CategoriasTitle = styled.div`

display:flex;

justify-content:center;
align-items:center;
text-align:center;
width:100%;

background-color:red;



@media (max-width:768px) {
    
    text-align: center;
}

`

export const CategoriasContainer = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    gap:20px;
    
    @media (max-width:768px) {
        padding-top:30px;
        text-align:center;
    }

`