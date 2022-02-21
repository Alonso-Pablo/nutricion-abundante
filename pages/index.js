import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import PowerMakers from '../public/images/Home/power_maker.png';
import FiberSupreme from '../public/images/products/fiber_caja_s.png'
import AloeBetas from '../public/images/Home/aloe_betas.png';
import Omniost from '../public/images/products/omniost_caja_s.png';
import Focus from '../public/images/products/focus_bote.png';
import Biocroses from '../public/images/Home/biocroses.png';
import Omniplus from '../public/images/Home/omniplus.png';
import Thermogenicos from '../public/images/Home/thermogenicos.png';

import Fssc from '../public/images/certificates/FSSC_22000.png';
import Ison9001 from '../public/images/certificates/ISO_9001.png';
import Ison14001 from '../public/images/certificates/ISO_14001.png';
import Ison45001 from '../public/images/certificates/ISO_45001.png';


import { GlobalStyles, colors, breakpoint,
  ImageSvg, Div, Section, HeaderSection, TitleSection, Paragraph, Anchor } from "../styles/GlobalStyle";

import { Navigator } from '../components';
import { Footer } from '../components'

import useWindowSize from '../Hooks/useWindowSize';

export default function Home() {

  const { width } = useWindowSize();

  let [ isDeviceCellphone, setIsDeviceCellphone ] = useState(false)

  useEffect(() => {
    if (width > 725){
      setIsDeviceCellphone(false)
    } else {
      setIsDeviceCellphone(true)
    }
  },[width])

  return (
    <>
      <GlobalStyles/>

      <Head >
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="keywords" content="Omnilife - Productos Omnilife - Comprar Omnilife - Power Maker - Omniplus" />
        <link rel="icon" href="/favicon.ico" />
        <title>Nutrición Abundante - Distribuidores Independientes de Productos Nutricionales Omnilife y Seytú</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="En Nutrición Abundante encontrarás productos nutricionales para suplir tus necesidades vitaminicas y minerales en el día a día. Somos distribuidores independientes de Omnilife" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Nutrición Abundante - Distribuidores Independientes de productos Omnilife y Seytú" />
        <meta property="og:description" content="Aquí vas a encontrar productos nutricionales para tener una mejor alimentación diaria" />
        <meta property="og:url" content="https://nutricion-abundante.vercel.app/" />
        <meta property="og:image" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />
        <meta property="og:site_name" content="Nutrición Abundante" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />
        <meta name="twitter:title" content="Nutrición Abundante - Distribuidores Independientes de productos Omnilife y Seytú" />
        <meta name="twitter:description" content="Aquí vas a encontrar productos nutricionales para tener una mejor alimentación diaria" />
        <meta name="twitter:image" content="https://nutricion-abundante.vercel.app/og-1000x500.png" />

      </Head>

      <Navigator isDeviceCellphone={isDeviceCellphone}/>

      <main>

        <VideoYTContainer>
          <VideoYT
            src="https://www.youtube.com/embed/qv8E21itfSs?start=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen />
        </VideoYTContainer>

        <Section 
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingBottom="30px">

          <HeaderSection backgroundColor={colors.purple} color={colors.white}>
          
            <Div display="flex" width="90%" justifyContent="center" alignItems="center">

              <TitleSection>PRINCIPALES<br/>PRODUCTOS<br/>NUTRICIONALES</TitleSection>

              <ImageSvg widthSmall="48px" widthLarge="65px" fillColor={colors.white} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 226 466" >
                <path  d="M72,48c1.36-0.38,4.22-1.51,8-2c23-3,52-2,69,0c3.79,0.45,6.64,1.62,8,2v24l-2.74,0.91   c-0.06,0.02-0.05,0.1,0.01,0.11c0.74,0.09,3.2,0.59,2.72,2.98c-0.5,2.5-7,3-7,3s-0.5,9.5,1,12c4.74,7.91,12.77,17.64,14,20   c6.5,12.5,11.5,22.5,13,67c0.62,10.69,1.55,34.95-2.5,65.5c-0.45,3.43-1,7-1,7L171,350l0,0c0,0,1.26,2.26,2,5   c1.34,4.93-0.05,13.76-0.5,17.5c-1.5,12.5-11,29-11,29c-3.72,5.37-13.92,18.87-30.5,23.5c-6.33,1.77-12.94,1.97-15,2   c-0.78,0.01-9.15,0.09-17-2c-18.93-5.05-30.74-21.7-33-25c-2.65-3.87-12.5-28.5-10-45c0.41-2.74,3-6,3-6l-4.5-99.5   c0,0-0.84-6.4-1.5-9.5c-3.5-16.5-1.62-45.5-2-64c-0.5-24.5,0-49,26.5-84.5c1.27-1.7,1-13,1-13s-7,0-7-3s4-1.92,4-3L72,72V48z"/>
              </ImageSvg>

              <ImageSvg widthSmall="40px" widthLarge="60px" fillColor={colors.white} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 226 466">
                <path d="M67.5,52.21c0-3.35,2.48-6.18,5.79-6.61c7.04-0.91,20.6-2.17,41.21-2.11c24.16,0.07,39.55,1.8,47.19,2.96   c3.32,0.5,5.74,3.41,5.65,6.77l-0.71,26.09c-0.07,2.45,1.17,4.82,3.35,5.96c0.85,0.44,1.51,1.14,1.51,2.23   c0,0.68-0.69,1.13-1.6,1.42c-2.78,0.9-4.69,3.48-4.64,6.4c0.04,2.73,0.32,5.88,1.24,8.18c4.66,11.65,8.57,16.89,15,27   c4.67,7.34,13,31,10,41c-1.51,5.02-6,6-10,13c-3.29,5.76-3.02,9.76-3,11c0.07,5.58,1.94,10.14,4,12c3.11,2.8,5.36,5.02,6.97,6.75   c2.6,2.79,3.98,6.51,3.8,10.32l-7.53,164.76c-0.16,3.51-1.23,6.91-3.14,9.86c-2.78,4.31-7.12,10.57-11.1,14.31   c-11.39,10.69-24.23,13.84-33,16c-7.18,1.77-24.28,5.75-45,0c-5.76-1.6-13.81-5.51-24-11c-10.98-5.91-17.67-19.66-19.49-23.8   c-0.33-0.75-0.52-1.56-0.56-2.38l-7.82-169.03c-0.09-1.94,0.5-3.85,1.67-5.4c1.71-2.27,4.84-6.03,10.2-11.39c3-3,7-12-1-23   c-6.38-8.77-7.68-10.37-9-13c-4-8,8.63-37.65,11-42c6-11,9-13,14-25c0.45-1.09,0.7-4.52,0.84-7.71c0.13-3.13-1.84-6.04-4.87-6.84   c-1.11-0.3-1.97-0.75-1.97-1.45c0-1.13,0.7-1.83,1.58-2.27c2.18-1.09,3.42-3.47,3.42-5.9V52.21z"/>
              </ImageSvg>

              <ImageSvg widthSmall="48px" widthLarge="65px" fillColor={colors.white} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 326 466">
                <polygon points="25,87 72,45 294,72 286,389 78,431 30,364 " fill="#FFFFFF"/>
              </ImageSvg>

            </Div>
          </HeaderSection>

          <ContentContainer>

            <ProductItem>
              <ProductBackground>
               <Image width="130" height="130" src={PowerMakers} alt="Alimento nutricional: Power Maker caja o bote" />
              </ProductBackground>
              <TitleBackground>
                <p>POWER MAKER</p>
              </TitleBackground>
              <DescriptionBackground>
                <span>Energia</span>
              </DescriptionBackground>
            </ProductItem>

            <ProductItem>
              <ProductBackground>
                <Image width="120" height="120" src={FiberSupreme} alt="Alimento nutricional: Fiber Supreme" />
              </ProductBackground>
              <TitleBackground>
                <p>FIBER SUPREME</p>
              </TitleBackground>
              <DescriptionBackground>
                <span>Extractos de fibras</span>
              </DescriptionBackground>
            </ProductItem>

            { !isDeviceCellphone &&
              <>
                <ProductItem>
                  <ProductBackground>
                  <Image width="120" height="120" src={AloeBetas} alt="Alimento nutricional: Aloe Beta sabor limon y anana" />
                  </ProductBackground>
                  <TitleBackground>
                    <p>ALOE BETA</p>
                  </TitleBackground>
                  <DescriptionBackground>
                    <span>Extracto de Aloe Vera</span>
                  </DescriptionBackground>
                </ProductItem>

                <ProductItem>
                  <ProductBackground>
                  <Image width="120" height="120" src={Omniost} alt="Alimento nutricional: Omniost" />
                  </ProductBackground>
                  <TitleBackground>
                    <p>OMNIOST</p>
                  </TitleBackground>
                  <DescriptionBackground>
                    <span>Calcio, Vitamina D,...</span>
                  </DescriptionBackground>
                </ProductItem>

                <ProductItem>
                  <ProductBackground>
                    <Image width="120" height="120" src={Focus} alt="Alimento nutricional: Focus" />
                  </ProductBackground>
                  <TitleBackground>
                    <p>FOCUS</p>
                  </TitleBackground>
                  <DescriptionBackground>
                    <span>Colina, Glicina,...</span>
                  </DescriptionBackground>
                </ProductItem>
              </>
            }

            <ProductItem>
              <ProductBackground>
                <Image width="190" height="120" src={Biocroses} alt="Alimento nutricional: Focus" />
              </ProductBackground>
              <TitleBackground>
                <p>BIOCROS</p>
              </TitleBackground>
              <DescriptionBackground>
                <span>Energia y Vitaminas B</span>
              </DescriptionBackground>
            </ProductItem>
            
            <ProductItem>
              <ProductBackground>
                <Image width="240" height="120" src={Omniplus} alt="Alimento nutricional: Omniplus" />
              </ProductBackground>
              <TitleBackground>
                <p>OMNIPLUS</p>
              </TitleBackground>
              <DescriptionBackground>
                <span>Multivitamínico</span>
              </DescriptionBackground>
            </ProductItem>

            <ProductItem>
              <ProductBackground>
                <Image width="190" height="85" src={Thermogenicos} alt="Alimento nutricional: Thermogenicos" />
              </ProductBackground>
              <TitleBackground>
                <p>THERMOGENICOS</p>
              </TitleBackground>
              <DescriptionBackground>
                <span>Control de peso</span>
              </DescriptionBackground>
            </ProductItem>

          </ContentContainer>

          <Div display="flex" width="90%" justifyContent="center">

            <Anchor 
              referrerPolicy="no-referrer" target="_blank" rel="noreferrer" 
              href="https://portal.omnilife.com/registro-cliente?distributor_code=54100361TBZ&country_code=ARG&lang=es"
              color={colors.white} backgroundColor={colors.purple}>
              <span>Comprar como<br/>Cliente Admirable</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none">
                <path fill="white" d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z" />
              </svg>
            </Anchor>

            <Link passHref href="/products">
              <Anchor marginLeft="10px" color={colors.blackgray} backgroundColor={colors.orange}>
                <span>Ver más</span>
              </Anchor>
            </Link>

          </Div>

        </Section>
        
        <Section
          display="flex" 
          flexDirection="column"
          alignItems="center"
        >

          <HeaderSection backgroundColor={colors.blackgray} color={colors.white}>

            <Div display="flex" width="90%" justifyContent="center" alignItems="center">
              <TitleSection>
                CERTIFICADOS<br/>INTERNACIONALES<br/>A OMNILIFE
              </TitleSection>

              <ImageSvg widthSmall="90px" widthLarge="115px" fillColor={colors.white} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 158 152" >
                <path fill="#FFFFFF" d="M26.5,101.5c-3.3-6.5-7.5-20.5-5-36c4.5-27.8,29.1-45.9,54-48c24-2,36,8,36,8s-32-2-58,21   c-16.4,14.5-22.4,32.3-24,38C27.6,91.3,26.8,97.2,26.5,101.5z"/>
                <path fill="#FFFFFF" d="M32.5,112.5c0-2.7,0-16,7-28c31-53,91-41,91-41c2.2,3,4.9,7.3,7,13c2.5,6.9,3,12.9,3,17   c-4.3-1.1-10.5-2.3-17.9-2.3c-10.6,0-24.6,2.3-38.1,11.3c-33.3,22.2-32,47-32,47c-3.1-1.4-7.6-3.9-12-8   C36.7,117.9,32.5,112.5,32.5,112.5z"/>
                <path fill="#FFFFFF" d="M64,134c0,0-1-21,27.5-35.5C123.8,82.1,138,96,138,96s-5,22.1-27.5,33.5C82.5,140.5,64,134,64,134z"/>
              </ImageSvg>
            </Div>
          </HeaderSection>

          <ContentContainer>

            <Certificate>
              <Image width="120" height="120" src={Fssc} 
                title="Certificación Internacional FSSC 22000 Sistema de Gestión de Inocuidad"
                alt="Certificación Internacional FSSC 22000 Sistema de Gestión de Inocuidad" />
              <Paragraph>Sistema de<br/>Gestión de Inocuidad</Paragraph>
            </Certificate>
            
            <Certificate>
              <Image width="120" height="120" src={Ison9001} 
                title="Certificación internacional ISO 9001:2015 Sistema de Gestión de Calidad"
                alt="Certificación internacional ISO 9001:2015 Sistema de Gestión de Calidad" />
              <Paragraph>Sistema de<br/>Gestión de Inocuidad</Paragraph>
            </Certificate>

            <Certificate>
              <Image width="120" height="120" src={Ison14001} 
                title="Certificación internacional ISO 14001:2015 Gestión Ambiental"
                alt="Certificación internacional ISO 14001:2015 Gestión Ambiental" />
              <Paragraph>Sistema de<br/>Gestión de Inocuidad</Paragraph>
            </Certificate>

            <Certificate>
              <Image width="120" height="120" src={Ison45001} 
                title="Certificación Internacional ISO 45001:2018 Seguridad y Salud Ocupacional"
                alt="Certificación Internacional ISO 45001:2018 Seguridad y Salud Ocupacional" />
              <Paragraph>Sistema de<br/>Gestión de Inocuidad</Paragraph>
            </Certificate>

          </ContentContainer>

        </Section>

        <Section
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingBottom="30px"
          backgroundColor={colors.orange}>
            
          <Div
            display="flex"
            width="90%"
            marginTop="30px"
            flexDirection="column"
            alignItems="center"
            backgroundColor={colors.orange}>

            <TitleSection>¿TIENES UN SUEÑO?</TitleSection>
            <Paragraph>Queremos ser el puente<br/>para que lo alcances</Paragraph>
            
            <Div
              display="flex"
              marginTop="30px"
              flexWrap="wrap"
              justifyContent="center">

              <Benefits>

                <ImageSvg widthSmall="50px" widthLarge="55px" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 123 123">
                  <g transform="translate(-1078 -2839)">
                    <g transform="translate(968.599 2683.312)">
                      <path fill="#fff" d="M391.553,194.5a29.978,29.978,0,0,0-19.613-25.156,33.1,33.1,0,0,0-18.062-1.373,36.929,36.929,0,0,0-16.054,7.726,36.931,36.931,0,0,0-16.055-7.726,33.106,33.106,0,0,0-18.062,1.373A29.978,29.978,0,0,0,284.094,194.5a38.886,38.886,0,0,0,1.048,13.851h5.565a34.267,34.267,0,0,1-1.264-13.24,24.686,24.686,0,0,1,16.142-20.722,26.981,26.981,0,0,1,9.428-1.684,31.17,31.17,0,0,1,20.982,8.537,2.692,2.692,0,0,0,3.646,0c8.669-7.983,20.323-10.607,30.415-6.852A24.686,24.686,0,0,1,386.2,195.113c1.018,8.894-2.107,19.07-9.037,29.432-8.2,12.264-21.435,24.572-39.343,36.6-17.053-11.456-29.866-23.165-38.133-34.848H293.2q.4.62.811,1.241c8.829,13.2,23.071,26.348,42.334,39.088a2.691,2.691,0,0,0,2.97,0c19.263-12.74,33.505-25.891,42.334-39.088C389.292,216.1,392.719,204.677,391.553,194.5Z" transform="translate(-159.375)"/>
                      <path fill="#fff" d="M153.636,467.834l6.14-15.784,8.384,33.716a2.692,2.692,0,0,0,5.008.578l8.6-16.795h16.755a2.692,2.692,0,1,0,0-5.383H180.126a2.692,2.692,0,0,0-2.4,1.464L171.653,477.5l-8.7-34.975a2.692,2.692,0,0,0-5.121-.327l-8.547,21.972H112.093a2.692,2.692,0,1,0,0,5.383h39.035a2.691,2.691,0,0,0,2.508-1.715Z" transform="translate(0 -249.533)"/>
                    </g>
                  </g>
                </ImageSvg>

                <Paragraph>Una oportunidad de<br/>mejorar tu calidad de vida</Paragraph>

              </Benefits>


              <Benefits>

                <ImageSvg widthSmall="50px" widthLarge="55px" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 117.34 123">
                  <path fill="#fff" d="M118.67,79.07a9,9,0,0,0-12.47-2.5L95.35,83.83a2.23,2.23,0,0,0,2.47,3.71l10.85-7.26a4.54,4.54,0,0,1,5.09,7.51l-.05,0L81,109.66a4.47,4.47,0,0,1-3.1.72l-31.49-9-.25-.06a8.92,8.92,0,0,0-6.61,1.36l-1.88,1.26L25.56,85.74,40.13,76a9.71,9.71,0,0,1,7.15-1.47L81.21,85.38h0a4.52,4.52,0,0,1,3,5.57,4.35,4.35,0,0,1-2.16,2.61,4.51,4.51,0,0,1-3.47.33h0l0,0L61.94,89.48a2.23,2.23,0,0,0-1.19,4.3h0l16.57,4.39h0a9,9,0,0,0,6.76-.67,8.82,8.82,0,0,0,4.35-5.28,9,9,0,0,0-5.91-11.09h0L48.69,70.27a1.66,1.66,0,0,0-.38-.11,14.06,14.06,0,0,0-10.65,2.1L23.09,82,21.8,80.09a2.23,2.23,0,0,0-3.09-.62L3.82,89.4a2.23,2.23,0,0,0-.62,3.09h0l12.16,18.24a2.23,2.23,0,0,0,3.71-2.47h0L8.15,91.87l11.18-7.45,17.2,25.8-11.18,7.46-.53-.81a2.23,2.23,0,0,0-3.73,2.45l0,0L22.88,122a2.23,2.23,0,0,0,3.09.62h0l14.89-9.93a2.23,2.23,0,0,0,.62-3.09l-1.31-2L42,106.37a4.51,4.51,0,0,1,3.25-.7l31.56,9h0l.13,0,.1,0h0a9,9,0,0,0,6.37-1.4l32.7-21.83a9,9,0,0,0,2.48-12.45Z" transform="translate(-2.83 0)"/>
                  <path fill="#fff" d="M88.55,33.61a18.24,18.24,0,0,0-5.22-1.79l-.12,0V20.51l.18,0A7.71,7.71,0,0,1,86.46,22a5.16,5.16,0,0,1,2,3.92,2.28,2.28,0,0,0,2.27,2.22h0A2.26,2.26,0,0,0,93,25.88a9.58,9.58,0,0,0-3.71-7.34A12.26,12.26,0,0,0,83.48,16l-.11,0-.05-2.74A2.28,2.28,0,0,0,81.05,11h0a2.27,2.27,0,0,0-2.23,2.3l0,2.73-.12,0A12.35,12.35,0,0,0,73,18.81,9.44,9.44,0,0,0,71.66,32.1a8.89,8.89,0,0,0,1.41,1.4l0,0a11.19,11.19,0,0,0,5.62,2.22l.12,0V49.51l-.19,0a8.49,8.49,0,0,1-3.89-2.37,5.85,5.85,0,0,1-1.57-3.83A2.29,2.29,0,0,0,70.92,41h0a2.26,2.26,0,0,0-2.22,2.3,10.08,10.08,0,0,0,1.15,4.5,11.25,11.25,0,0,0,2.9,3.53,13.47,13.47,0,0,0,5.85,2.73l.11,0,0,2.87A2.28,2.28,0,0,0,81,59.21h0a2.27,2.27,0,0,0,2.22-2.3l0-2.62.13,0a13.67,13.67,0,0,0,7.36-3.21,11.46,11.46,0,0,0,2.78-3.63,10.06,10.06,0,0,0,1-4.54A10.94,10.94,0,0,0,88.55,33.61ZM83.38,49.69l-.17,0V36.43l.18,0a13,13,0,0,1,3,1.08A6.49,6.49,0,0,1,90,43c.06,3.18-2.71,6-6.56,6.71Zm-4.55-29v10.5l-.17,0A6.16,6.16,0,0,1,76,30h0a4.93,4.93,0,0,1-1-6.9,4.67,4.67,0,0,1,.91-.92,7.51,7.51,0,0,1,2.69-1.5Z" transform="translate(-2.83 0)"/>
                  <path fill="#fff" d="M113.8,21.48a35.11,35.11,0,1,0,2.74,13.61A35.08,35.08,0,0,0,113.8,21.48Zm-32.35,45a31.4,31.4,0,1,1,31.41-31.4,31.39,31.39,0,0,1-31.41,31.4Z" transform="translate(-2.83 0)"/>
                </ImageSvg>

                <Paragraph>Obtener<br/>nuevos ingresos</Paragraph>

              </Benefits>


              <Benefits>

                <ImageSvg widthSmall="50px" widthLarge="55px" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 123 123">
                  <g transform="translate(-1078 -3325)" >
                    <g transform="translate(-1430.172 1637.854)">
                      <path stroke="#fff" d="M2838.279,1712.676c7.188,9.378,20.509,11.285,20.509,11.285s1.666-13.3-5.523-22.684-20.509-11.285-20.509-11.285S2831.091,1703.3,2838.279,1712.676Z" transform="translate(-305.1)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <path stroke="#fff" d="M3331.076,2009.618c0-8.307,5.359-19.65,15.5-27.784" transform="translate(-777.223 -276.407)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <path stroke="#fff" d="M2987.791,2686.006h18.85a8.079,8.079,0,0,1,8.079,8.079h0a8.079,8.079,0,0,1-8.079,8.079H2917.77v32.315h88.871a8.079,8.079,0,0,0,8.079-8.079v-32.315" transform="translate(-385.781 -943.334)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <path stroke="#fff" d="M2594.917,2468c-1.886-7.146-5.517-13.731-11.76-17.539-11.689-7.123-20.753,0-29.3,0s-17.213-6.432-29.3,0c-12.04,6.4-17.5,24.658-11.9,44.617,5.21,18.6,18.924,29.475,29.475,29.475,4.371,0,8.128-3.087,11.72-3.087s7.348,3.087,11.719,3.087c5.552,0,11.978-3.01,17.581-8.572" transform="translate(0 -717.247)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <line stroke="#fff" y2="16.158" transform="translate(2596.624 1774.987)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <line stroke="#fff" y2="16.158" transform="translate(2612.782 1774.987)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <line stroke="#fff" y2="16.158" transform="translate(2580.467 1774.987)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <line stroke="#fff" y2="16.158" transform="translate(2564.309 1774.987)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                      <line stroke="#fff" y2="16.158" transform="translate(2548.152 1774.987)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.466"/>
                    </g>
                  </g>
                </ImageSvg>

                <Paragraph>Ayudar a gente a<br/>mejorar su salud</Paragraph>

              </Benefits>


              <Benefits>

                <ImageSvg widthSmall="50px" widthLarge="55px" xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 0 123 123">
                  <g transform="translate(-1078 -3161)">
                    <g transform="translate(596.912 1814.795)">
                      <path stroke="#fff" d="M598.435,1404.658c-2.746-1.259-2.4-6.719-10.984-8.819-3.379-.826-15.91-.807-30.073-.554-8.374-9.2-21.433-23.476-22.293-23.927-1.273-.665-9.587.933-9.587.933-.753,1.163,12.246,16.235,12.542,19.364.076.807.274,2.287.524,4.038-15.63.37-29.255.7-30.747.148-3.434-1.26-11.671-14.7-13.387-15.118,0,0-10.984-.84-11.67.42s9.954,28.976,18.879,31.5c4.179,1.18,19.728,2.176,37.018,2.685-.521,3.434-1.039,6.994-1.175,8.429-.3,3.129-13.293,18.2-12.542,19.364,0,0,8.315,1.6,9.587.933,1.018-.533,19.123-20.425,26.324-28.358,12.12.031,23.056-.249,29.346-.949,18.879-2.1,10.984-8.817,8.238-10.08Z" fill="none" strokeMiterlimit="10" strokeWidth="4.323"/>
                    </g>
                  </g>
                </ImageSvg>

                <Paragraph>Tu negocio te lleva<br/>a cumplir tus sueños</Paragraph>

              </Benefits>

            </Div>

              <Link passHref href="/join">
                <Anchor marginTop="20px" color={colors.blacklight} backgroundColor={colors.white}>Quiero unirme<br/>al Equipo</Anchor>
              </Link>

          </Div>
        </Section>
        
      </main>

      <Footer/>
    </>
  )
}



// YT Video

export const VideoYTContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.trueblack};
`;

export const VideoYT = styled.iframe`
  width: 560px;
  height: 315px;

  @media only screen and ${breakpoint.large} {
    width: 660px;
    height: 415px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
`;

export const ProductItem = styled.div`
  display: flex;
  min-width: 220px;
  max-width: 300px;
  height: 200px;
  justify-content: space-around;
  flex-grow: 1;
  flex-direction: column;
  margin: 10px;
  box-shadow: 10px 10px 16px -17px rgba(0,2,34,1);

  @media only screen and ${breakpoint.large} {
    min-width: 200px;
  }
`;

export const ProductBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 8;
  background-color: ${colors.graylight};
  border-radius: 4px 4px 0 0 ;
`;

export const TitleBackground = styled.div`
  display: flex;
  min-height: 42px;
  justify-content: center;
  align-items: center;
  flex-grow: 1.5;
  background-color: ${colors.orange};
  color: ${colors.trueblack};
  font-size: 1.7rem;
  font-weight: 700;
`;

export const DescriptionBackground = styled.div`
  display: flex;
  min-height: 28px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${colors.blackgray};
  color: ${colors.white};
  border-radius: 0 0 4px 4px ;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Certificate = styled.div`
  padding: 10px;
  margin: 20px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const Benefits = styled.div`
  display: flex;
  text-align: center;
  min-width: 90px;
  max-width: 140px;
  padding: 10px 10px;
  margin: 10px;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;
