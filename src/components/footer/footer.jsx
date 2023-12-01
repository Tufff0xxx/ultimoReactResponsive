import React from 'react'
import { FooterConteiner, FooterInfo, FooterLinks } from './styles'

export const Footer = () => {
  return (
    <FooterConteiner>
        <FooterLinks>
            <a href="/#">Terminos de uso</a>
            <a href="/#">Conocenos</a>
            <a href="/#">Contacto</a>
        </FooterLinks>
        <FooterInfo>
              <p>Hecho por Otakus para Otakus</p>
        </FooterInfo>
        
    </FooterConteiner>
  )
}
