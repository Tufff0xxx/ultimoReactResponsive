import React from 'react'
import { ButtonAdd, ButtonConteiner, CardConteiner } from './styles'
export const ProductsCards = ({img, title, desc, price}) => {
  return (
    <CardConteiner>

        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        
        <ButtonConteiner>

            <p>${price}</p>
            <ButtonAdd whileTap={{scale:0.95}}>
            
                Agregar
            </ButtonAdd>
            
            
            
        </ButtonConteiner>
    </CardConteiner>
  )
}
