import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CategorySelector} from '../../components/CategorySelector';
import {ProductCard} from '../../components/ProductCard';
import { Container, SearchInput, ProductsContainer } from './style';
import { fetchProducts } from '../../servicesAPI';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const loadAPI = async () => {
    const response = await fetchProducts()
      if (response.status === 200) {
        setProducts(response.data)
      }else {
        console.error('Erro ao buscar produtos', response);
      }
  }

  useEffect(() => {
    loadAPI()
  }, []);

   const filteredProducts = products.filter(product =>
    (selectedCategory === 'Todos' || product.category === selectedCategory) &&
     product.name.toLowerCase().includes(searchTerm.toLowerCase())
   );



  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <CategorySelector onCategoryChange={handleCategoryChange} />
      <ProductsContainer> 
      {loading ? (
          <p>Loading products...</p>  // Exibe enquanto está carregando
        ) : (
        filteredProducts.map((product) => (
           <ProductCard key={product.id} product={product} />
         )))}
      </ProductsContainer>
     </Container>

   

  );
};


