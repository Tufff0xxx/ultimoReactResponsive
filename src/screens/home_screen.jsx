import React from 'react'
import { Header } from '../components/header'
import { CategoriaWidget } from '../components/categorias/categorias/widget/categoria_widget'
import { ProductsCards } from '../components/products/products_cards/products_cards'
import { ProductsWidget} from '../components/products/products_widget/products_widget'
import { Footer } from '../components/footer/footer'
import { Navbar } from '../components/navbar/navbar'


export const HomeScreen = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <CategoriaWidget></CategoriaWidget>
      <ProductsWidget></ProductsWidget>
      <Footer></Footer>
        
      
    </div>


    
  )
}
