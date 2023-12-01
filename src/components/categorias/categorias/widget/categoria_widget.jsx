
import { categorias } from "../../data/categorias"
import { Cards } from "../cards/cards"
import { CategoriasContainer, CategoriasTitle, CategoriasWrapper } from "./styles"
export const CategoriaWidget = () => {
  return (
    <CategoriasWrapper>
      <CategoriasTitle>
      <h2>CATEGORIAS</h2>
      </CategoriasTitle>
        
        <CategoriasContainer>
            {
                categorias.map((item)=> <Cards key={item.id} {...item}/>)
                //categorias.map((item)=> <Cards key  ={item.id} {...item}/>)
            }
        </CategoriasContainer>
    </CategoriasWrapper>
  )
}

