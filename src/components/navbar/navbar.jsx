import React from 'react'
import { FaAdn, FaHouseDamage } from 'react-icons/fa';
import { HomeConteiner, LinkConteiner, LinksContainer, NavbarContainer, UserConteiner, UserImage, UserNav } from './styles';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <NavbarContainer>
        <UserImage>
            <a href=""><img src="https://static.posters.cz/image/750webp/26314.webp" alt="" /></a>

        </UserImage>
        <LinksContainer>
        <HomeConteiner>
        <motion.div whileTap={{scale:0.97}}> 
        <a href="/#">
              <LinkConteiner home={true}>
                  <FaAdn/>
                <span>HOME</span>      
              </LinkConteiner>
            </a>
        

        </motion.div>
       
            
        <UserNav>
        <UserConteiner>
            <span>Iniciar sesion </span>
            <FaHouseDamage/>
        </UserConteiner>
        </UserNav> 
        

        </HomeConteiner>
            
        </LinksContainer>
    </NavbarContainer>
  )
}
