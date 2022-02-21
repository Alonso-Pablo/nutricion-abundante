import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { GlobalStyles, colors } from "../styles/GlobalStyle";
import { Navigator } from '../components';
import { CountryList } from '../components';
import { Footer } from '../components'

import useWindowSize from '../Hooks/useWindowSize';


export const getServerSideProps = async () => {
  // const response = await fetch('http://localhost:3000/api/products') // Dev
  const response = await fetch('https://nutricion-abundante.vercel.app/api/products');
  const { data } = await response.json()
  return {
    props: {
      data,
    }
  }
}


export default function join({ data }) {

  const allCountries = Object.values(data[1]);

  const { width } = useWindowSize();

  let [ isDeviceCellphone, setIsDeviceCellphone ] = useState(false);


  useEffect(() => {
    if (width > 725){
      setIsDeviceCellphone(false)
    } else {
      setIsDeviceCellphone(true)
    }
  },[width]);


  return (
    <>
      <GlobalStyles/>

      <Head >
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="keywords" content="Omnilife - Productos Omnilife - Comprar Omnilife - Power Maker - Omniplus" />
        <meta charSet="UTF-8" />
        <title>Nutrición Abundante - Productos Nutricionales Omnilife y Seytú</title>
        <meta name="description" content="Nutrición Abundante te ofrece productos nutricionales para suplir tus necesidades alimentición en el día a día. Distribuidores Independientes de Omnilife" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigator isDeviceCellphone={isDeviceCellphone}/>

      <Main>
        <Section>

          <Title isDeviceCellphone={isDeviceCellphone}>Unete a nuestro equipo:</Title>

          <SectionContainer>
            <Subtitle isDeviceCellphone={isDeviceCellphone}>Selecciona tu país y registrate</Subtitle>
            <CountriesContainer>

              <CountryList allCountries={allCountries} isDeviceCellphone={isDeviceCellphone} />

            </CountriesContainer>

          </SectionContainer>

        </Section>
      </Main>

      <Footer isDeviceCellphone={isDeviceCellphone} />
    </>
  )
}

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.graylight};
  padding: 30px 0;
`;

export const Section = styled.section`
  display: flex;
  width: 90%;
  max-width: 1200px;

  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: ${({isDeviceCellphone}) => isDeviceCellphone ? "2rem" : "2rem"};
  justify-content: center;
  align-items: center;
`;

export const SectionContainer = styled.div`
box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  background-color: ${colors.white};
  border-radius: 4px;
`;

export const Subtitle = styled.h2`
  font-size: ${({isDeviceCellphone}) => isDeviceCellphone ? "1.8rem" : "2rem"};
`;

export const CountriesContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  justify-content: center;
`;
