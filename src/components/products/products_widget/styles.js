import styled from "styled-components"

export const ProductsWrapper = styled.div`


display:flex;
flex-direction:column;
align-items:center;
width:100%;
max-width:1300px;

h2{
    
}
@media (max-width:768px) {
    padding-top: 30px;
    display:flex;
    flex-direction:column;
    text-align: center;
}
`

export const ProductsTitle = styled.div`
    display:flex;
    justify-content:center;
    background-color:red;
    width:100%;

`


export const ProductsContainer = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:100%;
    max-width:1200px;
    align-items:center;
    gap:20px;
    margin-top:30px;
    img{
        width:300px;
        height:300px;
    }
    @media (max-width:768px) {
        padding-top:30px;
        text-align:center;
        display:flex;
        flex-direction:column;
    }
    @media (max-width:576px) {
        img{
            width:150px;
            height:150px;
            align-items:center;
        }
    }

`
export const ButtonDiv = styled.div`

    display:flex;
    justify-content:center;
    padding-top:15px;
    
    button{
        
        border: 2px red;
        border-radius: 5px;
        color: red;
        padding: 10px;
        background-color:black;
        box-shadow: 0px 0px 5px 5px red;
        cursor: pointer;
    }


`
