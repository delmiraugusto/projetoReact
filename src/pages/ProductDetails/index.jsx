import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import { fetchProductById } from '../../servicesAPI';
import { CartContext } from '../../context/CartContext';
import {
    Container,
    MainSection,
    ImageGallery,
    LargeImage,
    Thumbnails,
    ProductInfo,
    AddToCartButton,
    QuantityInput,
    Divider,
    RecommendedProducts,
    BestSellers,
} from './style';

export const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Inicializar useNavigate
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState('');
    const [zoom, setZoom] = useState(false);

    const fetchProduct = async () => {
        try {
            const data = await fetchProductById(id);
            setProduct(data);
            const firstImage = data.image;
            setSelectedImage(firstImage);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            navigate('/cart'); // Redirecionar para a página do carrinho
        }
    };

    const handleMouseEnter = () => {
        setZoom(true);
    };

    const handleMouseLeave = () => {
        setZoom(false);
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetLeft, offsetTop, clientWidth, clientHeight } = currentTarget;

        const x = ((clientX - offsetLeft) / clientWidth) * 100;
        const y = ((clientY - offsetTop) / clientHeight) * 100;

        currentTarget.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <Container>
            {product ? (
                <>
                    <MainSection>
                        <ImageGallery>
                            <LargeImage
                                style={{
                                    backgroundImage: `url(${selectedImage})`,
                                    backgroundSize: zoom ? '200%' : '100%',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            />
                            <Thumbnails>
                                <img
                                    src={selectedImage}
                                    alt={`${product.name} thumbnail`}
                                />
                                {product.images?.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        onClick={() => setSelectedImage(image)}
                                    />
                                ))}
                            </Thumbnails>
                        </ImageGallery>

                        <ProductInfo>
                            <h1>{product.name}</h1>
                            <p>Preço: R$ {product.price ? product.price.toFixed(2) : 'N/A'}</p>
                            <p>{product.description}</p>
                            <p>Avaliações: {product.rating}</p>

                            <QuantityInput
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                            <AddToCartButton onClick={handleAddToCart}>Adicionar ao carrinho</AddToCartButton>
                        </ProductInfo>
                    </MainSection>

                    <Divider />

                    <RecommendedProducts>
                        <h3>Produtos Recomendados</h3>
                        <div className="products-list">
                            <div>Produto 1</div>
                            <div>Produto 2</div>
                            <div>Produto 3</div>
                        </div>
                    </RecommendedProducts>

                    <Divider />

                    <BestSellers>
                        <h3>Produtos Mais Comprados</h3>
                        <div className="products-list">
                            <div>Produto 4</div>
                            <div>Produto 5</div>
                            <div>Produto 6</div>
                        </div>
                    </BestSellers>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </Container>
    );
};
