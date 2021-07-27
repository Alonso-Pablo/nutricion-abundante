import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { GlobalStyles, colors, breakpoint, Div, Paragraph, Anchor } from "../styles/GlobalStyle";
import { Navigator } from '../components';
import { Footer } from '../components'

import useWindowSize from '../Hooks/useWindowSize';


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/products')
  const { data } = await response.json()
  return {
    props: {
      data,
    }
  }
}


export default function about({data}) {

  const allPics = Object.values(data[2]);
  const { width } = useWindowSize();

  let [ isDeviceCellphone, setIsDeviceCellphone ] = useState(false);
  let [ photo, setPhoto] = useState(0);

  useEffect(() => {
    if (width > 725){
      setIsDeviceCellphone(false)
    } else {
      setIsDeviceCellphone(true)
    }
  },[width]);

  const handleMoveTo = (direction) => {
    if (direction === "right") {
      if (photo === 15) return setPhoto(0)
      setPhoto(photo + 1)
    } else { // left
      if (photo === 0) return setPhoto(15)
      setPhoto(photo - 1)
    }
  }

  return (
    <>
      <GlobalStyles/>

      <Head >
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="keywords" content="Omnilife - Productos Omnilife - Comprar Omnilife - Power Maker - Omniplus" />
        <meta charSet="UTF-8" />
        <meta name="description" content="En Nutrición Abundante encontrarás productos nutricionales para suplir tus necesidades vitaminicas y minerales en el día a día. Somos distribuidores independientes de Omnilife" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nutrición Abundante - Distribuidores Independientes de Productos Nutricionales Omnilife</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Navigator isDeviceCellphone={isDeviceCellphone}/>

      <Main>

        <Travels>

          <ArrowSvgLeft isDeviceCellphone={isDeviceCellphone} onClick={() => handleMoveTo("left")} top="0%" left="0%" backgroundDeg="90deg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="10" fill="white"/>
              <path d="M12 5L7 10L12 15" stroke="black" strokeWidth="1.5"/>
            </svg>
          </ArrowSvgLeft>

          <Image placeholder="blurDataURL" src={allPics[photo].image} layout="fill" objectFit="contain" alt={allPics[photo].name} title={allPics[photo].name}/>

          <ArrowSvgRight isDeviceCellphone={isDeviceCellphone} onClick={() => handleMoveTo("right")} top="0%" right="-1px" margin="0 10px 0 0" backgroundDeg="270deg">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" rx="10" fill="white"/>
            <path d="M12 5L7 10L12 15" stroke="black" strokeWidth="1.5"/>
          </svg>
          </ArrowSvgRight>

        </Travels>

        <Div
          boxSizing="border-box"
          display="flex"
          width="100%"
          maxWidth="1200px"
          padding="10px 20px"
          justifyContent="center"
          backgroundColor={colors.trueblack}
          color={colors.white}
        >
          <Paragraph>{allPics[photo].name}</Paragraph>
        </Div>

          
        <Section>
          
          <Title>¡Hola!<br/>Somos Zulema Tevez, Pablo Alonso<br/>¡y un Equipo que crece día a día!</Title>

          <Paragraph fontSize="1.5rem" fontWeight="400" textAlign="start">
            Nos inscribimos a Omnilife como empresarios para comprar los nutrientes con descuentos. No nos interesaba la parte del negocio, solo los productos nutricionales, y sin saber, Omnilife no solo nos a cambió la salud y el estilo de vida si no también ¡la economía!<br/>
            <br/>
            Soy Zulma Tevez tengo 53 años, ex-costurera porque al momento de ver que se podia ganar bien ayudando a la gente regalé mi máquina de coser para emprender al 100% en Omnilife! Somos de Buenos Aires, Argentina, trabajamos en Equipo junto a mi esposo Pablo Alonso.<br/>
            <br/>
            Nos dimos cuenta que amamos ayudar a la gente, trascender en cada vida y cada corazón, ¡no tiene precio!
            Por consecuencia empezamos a ganar los bonos por dinero, los viajes por Todo el mundo!<br/>
            <br/>
            <b>- En el 2016:</b> viaje por primera vez a México Guadalajara 2 veces, ése año también nos Ganamos un viaje con toda mi familia a Bahamas Atlantis viaje Internacional de Omnilife ¡A pura emoción!<br/>
            <br/>
            <b>- En el 2017:</b> Viaje Internacional a Mónaco (donde corría la Formula 1) en Crucero!<br/>
            <br/>
            <b>- En el 2018:</b> me gané un Viaje a ¡DUBÁI-QATAR!<br/>
            <br/>
            <b>- En el 2019:</b> un viaje soñado a Jerusalén en Israel ¡¡Impresionante!!<br/>
            <br/>
            <b>- En el 2020:</b> ganamos un Viaje a PARÍS y ahora en el 2021 nos vamos a DUBÁI nuevamente a festejar los 30 años de nuestra maravillosa Empresa!<br/>
            <br/>
            <b>Nuestro lema es &quot;SOMOS GENTE QUE CUIDA A LA GENTE&quot;</b>
          </Paragraph>

        </Section>

        <Div
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems="center"
          backgroundColor={colors.orange}
          padding="30px 0"
        >

          <Div
            width="90%" 
          >
          <Paragraph>¡Te invitamos a unirte a nuestro Equipo en Omnilife-Seytú!</Paragraph>
          </Div>

          <Link passHref href="/join">
            <Anchor marginTop="20px" padding="0 20px" color={colors.blackgray} backgroundColor={colors.white} isCellphone={isDeviceCellphone}>
              Quiero unirme al equipo
            </Anchor>
          </Link>
          
        </Div>

      </Main>

      <Footer/>
    </>
  )
}

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.graylight};
`;

export const Travels = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
  max-width: 1200px;
  justify-content: center;
  background-color: ${colors.trueblack};

  @media only screen and ${breakpoint.large} {
    height: 500px;
  }
`;


export const ArrowSvgLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 400px;
  top: ${({top}) => top};
  left: ${({left}) => left};
  right: ${({right}) => right};
  z-index: 8000;
  opacity: 0.4;
  cursor: pointer;

  @media only screen and ${breakpoint.large} {
    height: 500px;
  }
`;

export const ArrowSvgRight = styled(ArrowSvgLeft)`

  & svg {
    transform: rotate(180deg)
  }
`;

export const Description = styled.figcaption`
  position: absolute;
  font-size: 2rem;
  color: black;
`;

export const Title = styled.h1`
text-align: center;
  font-size: 1.6rem;
  padding: 20px 0;

  @media only screen and ${breakpoint.large} {
    font-size: 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 90%;
  max-width: 1200px;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;