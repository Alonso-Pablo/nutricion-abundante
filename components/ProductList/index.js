// import styled from 'styled-components';
import styled from 'styled-components';

import Image from 'next/image'
import { colors, breakpoint, Div, Paragraph, Anchor } from "../../styles/GlobalStyle";
import { useEffect, useState } from 'react';

const RenderList = ({product, isDeviceCellphone, imageSize}) => {


  return (
    <Item id={product.id}>

      <Title>{product.name}</Title>

      <Div display="flex" width="100%" alignItems="center" padding="5px">

        <ImageProduct>
          <Image
          objectFit="contain"
          width={imageSize}
          height={imageSize}
          src={product.image}
          alt={product.name}
          title={product.name}/>
        </ImageProduct>
        
        { !isDeviceCellphone &&
          <>
            <Description>
              <Div display="flex" width="65%">
                <Paragraph textAlign="unset" fontWeight="unset">
                  <b>Contenido: </b><br/>{product.description.content}<br/>
                  <br/>
                  <b>Sabor: </b><br/>{product.description.flavor}<br/>
                  <br/>
                  <b>Vitaminas, Minerales y otros ingredientes: </b><br/>{product.description.ingredients}<br/>
                  <br/>
                  <b>Precio sugerido: </b><br/>$ {product.description.price}<br/>
                </Paragraph>
              </Div>

              <Anchor title={`Registrate y compra ${product.name}`} fontSizeLarge="1.4rem" minHeight="30px" width="60%" marginTop="20px" backgroundColor={colors.orange} color={colors.trueblack} referrerPolicy="no-referrer" target="_blank" rel="noreferrer"
              href="https://portal.omnilife.com/registro-cliente?distributor_code=54100361TBZ&country_code=ARG&lang=es">
                  COMPRAR COMO CLIENTE ADMIRABLE&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <path fill="black" d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z"/>
                </svg>
              </Anchor>

              <Anchor title={`Contactanos por WhatsApp por ${product.name}`} fontSizeLarge="1.4rem" minHeight="30px" width="60%" marginTop="20px" backgroundColor={colors.purple} color={colors.white} referrerPolicy="no-referrer" target="_blank" rel="noreferrer"
              href={`https://api.whatsapp.com/send/?phone=5491133136799&text=%C2%A1Hola%2C+Zulema%21+Quer%C3%ADa+m%C3%A1s+informaci%C3%B3n+sobre+el+producto+de+Omnilife+${product.name.replace(/ /g, "+")}&app_absent=0`}>
                  CONTACTAR POR ESTE PRODUCTO&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <path fill="white" d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z" />
                </svg>
              </Anchor>

            </Description>
          </>
        }
      </Div>

      { isDeviceCellphone && 
        <>
          <Description>
            <Div display="flex" width="65%">
              <Paragraph textAlign="unset" fontWeight="unset">
                <b>Contenido: </b><br/>{product.description.content}<br/>
                <br/>
                <b>Sabor: </b><br/>{product.description.flavor}<br/>
                <br/>
                <b>Vitaminas, Minerales y otros ingredientes: </b><br/>{product.description.ingredients}<br/>
                <br/>
                <b>Precio sugerido: </b><br/>$ {product.description.price}<br/>
              </Paragraph>
            </Div>
            
            <Anchor title={`Registrate y compra ${product.name}`} width="60%" minHeight="30px" marginTop="20px" backgroundColor={colors.orange} color={colors.trueblack} referrerPolicy="no-referrer" target="_blank" rel="noreferrer"
            href="https://portal.omnilife.com/registro-cliente?distributor_code=54100361TBZ&country_code=ARG&lang=es">
              COMPRAR COMO CLIENTE ADMIRABLE&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                <path fill="black" d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z"/>
              </svg>
            </Anchor>

            <Anchor title={`Contactanos por WhatsApp por ${product.name}`} width="60%" minHeight="30px" marginTop="20px" backgroundColor={colors.purple} color={colors.white} referrerPolicy="no-referrer" target="_blank" rel="noreferrer"
            href={`https://api.whatsapp.com/send/?phone=5491133136799&text=%C2%A1Hola%2C+Zulema%21+Quer%C3%ADa+m%C3%A1s+informaci%C3%B3n+sobre+el+producto+de+Omnilife+${product.name.replace(/ /g, "+")}&app_absent=0`}>
              CONTACTAR POR ESTE PRODUCTO&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" fill="none">
                <path fill="white" d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z" />
              </svg>
            </Anchor>
            
          </Description>
        </>
      }

    </Item>
  )
}

export default function ProductList({productList, isDeviceCellphone, category, isFiltered}) {

  let [ imageSize, setImageSize ] = useState(150);
  
  useEffect(() => {
    if (isDeviceCellphone) {
      setImageSize(200);
    } else {
      setImageSize(350);
    }
  },[isDeviceCellphone])

  return (
    <>
      {isFiltered 
        ? productList.map((product) => {
          if (category.includes(product.id)) {
            return <RenderList key={product.id} isDeviceCellphone={isDeviceCellphone} product={product} imageSize={imageSize}/>
          }
        })
        : productList.map((product) => (
          <RenderList key={product.id} isDeviceCellphone={isDeviceCellphone} product={product} imageSize={imageSize}/>
        ))
      }
    </>
  )
}

export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 12px 12px 15px -17px rgba(0,2,34,1);
  border-radius: 0 0 4px 4px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const Title = styled.h2`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0px;
  background-color: ${colors.blackgray};
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.white};
  border-radius: 4px 4px 0 0;

  @media only screen and ${breakpoint.large} {
    height: 30px;
    font-size: 2.2rem;
  }
`;

export const ImageProduct = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 220px;

  @media only screen and ${breakpoint.large} {
    height: 320px;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 90%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;