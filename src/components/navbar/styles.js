import styled from "styled-components";

export const NavbarContainer =  styled.div`
height: 100px;
Background: red;
display:flex;
justify-content: space-between;
align-items: center;
padding:20px 80px;
@media (max-width: 768px){
    padding: 20px 40px
}
`

export const LinksContainer = styled.div`

color:white;
display:flex;
justify-content:center;
align-items:center;
gap:40px;
a{
    padding:20px 30px;
    &:first-child{
        background-color: blue;
        border-radius: 1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
    }
}
`

export const LinkConteiner = styled.div`

font-size: 1.1rem;
color: ${(props)=> (props.home ? "red" : "blue")};
`

export const UserConteiner = styled.div`

    display:flex;
    align-items:center;

`

export const HomeConteiner = styled(LinkConteiner)`

    display:flex;
    align-items:center;
    gap:2rem;
    @media (max-width:768px) {
        display:none;
    }

`
export const MenuConteiner = styled(LinkConteiner)`

    display:none;
    align-items:center;
    font-size:2rem;
    cursor: pointer;

    @media (max-width:768px) {
        display:flex;
    }

`

export const UserNav = styled.div`

gap:15px;
cursor:pointer;
span{
    color:white;
    font-size:1rem;
    margin-right:20px;
    @media (max-width:768px) {
        display:none;
    }
}

`

export const UserImage = styled.div`

img{
    width:80px;
    height:80px;
    border-radius: 100px;
    cursor:pointer;
}    

`