import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { LinearProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'

import { getProducts } from './services';

import { 
  CardsRow,
  Container,
  Content,
  ContentWrapper,
  Divider,
  LoadingContainer,
  ProductCard,
  ProductListPrice,
  ProductName,
  ProductPrice,
  ProductPriceDetails,
  ProductRate,
} from './styles';
import OffPrice from '../../assets/off-polygon.svg';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus('');
    const handleProducts = async() => {
      setLoading(true);
      try {
        const res = await getProducts();
        setProducts(res);
      } catch (err) {
        setStatus('error');
      } finally {
        setLoading(false);
      }
    }
    handleProducts();
  }, []);

  const handleStars = (stars: number) => {
    const emptyStars = 5 - stars;
    return (
      <ProductRate>
        {[...Array(stars)].map((e, i) => (
          <FaStar key={i}/>
        ))}
        {
          [...Array(emptyStars)].map((e, i) => (
            <FaRegStar key={i} />
          ))
        }
      </ProductRate>
    )
  }

  const handleMoney = (value:any): string => {
    var newValue = (value / 100).toLocaleString('pt-br',{
      style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
    return newValue
  };
  
    return (
    <Container>
      {loading && <LoadingContainer>
        <LinearProgress/>
        </LoadingContainer>}
        <ContentWrapper>
          <h1>Mais Vendidos</h1>
          <Divider/>
          <Content>
            <CardsRow>
              {
                products.length && products.map((item, i) => (
                  <ProductCard key={i}>

                    <img alt="" src={item.imageUrl} />
                    { item.listPrice && <img alt="" className="flag" src={OffPrice}/>}
                    <div>
                      <ProductName>{item.productName}</ProductName>

                      {handleStars(item.stars)}

                      { item.listPrice && 
                        <ProductListPrice> de {handleMoney(item.listPrice)} </ProductListPrice>
                      }

                      <ProductPrice marginTop={item.listPrice ? 0 : 20}>
                        por {handleMoney(item.price)}
                      </ProductPrice>

                      { item.installments.length ? 
                        <ProductPriceDetails>
                          ou {item.installments[0].quantity}x 
                          de { handleMoney(item.installments[0].value)}
                        </ProductPriceDetails>
                        : null
                      }
                      <button type="button">COMPRAR</button>
                    </div>
                  </ProductCard>
                  )
                )
              }
            </CardsRow>
          </Content>
        </ContentWrapper>
        <Snackbar open={status === 'error'} autoHideDuration={5000} onClose={() => setStatus('')}>
          <MuiAlert elevation={6} variant="filled" severity="error" onClose={() => setStatus('')}>
            Ops! Algo de errado ocorreu ao listar os produtos. Tente novamente.
          </MuiAlert>
        </Snackbar>
    </Container>
  );
};

export default Products;
