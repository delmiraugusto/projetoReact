import React, { useState, useEffect } from 'react';
import { CategorySelector } from '../../components/CategorySelector';
import { ProductCard } from '../../components/ProductCard';
import { fetchProducts } from '../../servicesAPI';
import {
  Header, 
  NavBar, 
  NavButton, 
  SearchContainer, 
  Container, 
  ProductsContainer, 
  SearchInput, 
  LogoContainer, 
  Logo 
} from './style'; 
import { FaUserCircle, FaRegNewspaper, FaCartPlus, FaHistory, FaInfoCircle } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const loadAPI = async () => {
    setLoading(true);
    setError(null);
    const response = await fetchProducts();
    if (response.status === 200) {
      setProducts(response.data);
    } else {
      console.error('Erro ao buscar produtos', response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === 'Todos' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
      
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>

        <NavBar>
          <NavButton><FaUserCircle /> Login</NavButton>
          <NavButton><FaRegNewspaper /> Cadastro</NavButton>
          <NavButton><FaCartPlus /> Carrinho</NavButton>
          <NavButton><FaHistory /> Histórico de compras</NavButton>
          <NavButton><FaInfoCircle /> Sobre nós</NavButton>
        </NavBar>
      </Header>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchContainer>

      <CategorySelector onCategoryChange={handleCategoryChange} />
      <ProductsContainer>
        {loading ? (
          <p>Carregando produtos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </ProductsContainer>
    </Container>
  );
};
