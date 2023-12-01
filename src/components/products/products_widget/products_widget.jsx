import React from 'react';
import { ProductsCards } from '../products_cards/products_cards';
import { producst } from '../../categorias/data/products';
import { ButtonDiv, ProductsContainer, ProductsTitle, ProductsWrapper } from './styles';

export const ProductsWidget = () => {
  return (
    <ProductsWrapper>
      <ProductsTitle>
          <h2>PRODUCTOS</h2>
      </ProductsTitle>
      
      <ProductsContainer>
        {producst.map((product) => (
          <ProductsCards
            key={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </ProductsContainer>
      <ButtonDiv>
        <button>Ver mas</button>
      </ButtonDiv>
    </ProductsWrapper>
  );
};
