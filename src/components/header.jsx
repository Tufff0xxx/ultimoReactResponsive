import React from 'react'
import { HeaderContainer, HeaderImageContainer, HeaderTextContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTextContainer>
            <h1>Los mejores animes</h1>
            <h2>Tanto en latino como en Japones</h2>
            <p>Los vas a encontrar en nuestra web. Desde los clasicos
                como Yuyu Hakusho a actuales como Atack on the Titans
            </p>
            <button>INGRESA</button>
        </HeaderTextContainer>
        <HeaderImageContainer>
            <img src="https://i0.wp.com/elpalomitron.com/wp-content/uploads/2021/06/Critica-Final-EightySix-ElPalomitronPortad.jpg?fit=1200%2C675&ssl=1" alt="" />
        </HeaderImageContainer>
        
    </HeaderContainer>
  )
}
