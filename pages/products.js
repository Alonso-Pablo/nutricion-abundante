import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router'
import Head from 'next/head';

import { GlobalStyles, colors } from "../styles/GlobalStyle";
import { Navigator } from '../components';
import { ProductList } from '../components';
import { Footer } from '../components';

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

export default function Products({ data }) {
  const router = useRouter()

  if (typeof window !== "undefined") {
    const hash = window.location.hash
    const { id } = router.query
    if (id !== undefined && hash === '') {
      router.replace(`https://nutricion-abundante.vercel.app/products#${id}`);
      //router.replace(`http://localhost:3000/products#${id}`); // Dev
    }
  }

  const allProducts = Object.values(data[0]);
  const styleSelected = [colors.purple, colors.white]

  const { width } = useWindowSize();

  let [ isDeviceCellphone, setIsDeviceCellphone ] = useState(false);
  let [ transformPixel, setTransformPixel ] = useState(54);

  let [ productList, setProductList] = useState(allProducts);
  let [ isReverse, setIsReverse ] = useState(false);
  let [ isFiltered, setIsFiltered ] = useState(false);
  let [ isSelected, setIsSelected ] = useState(undefined);
  let [ category, setCategory ] = useState(undefined);

  useEffect(() => {
    if (width > 725) return setIsDeviceCellphone(false)
    return setIsDeviceCellphone(true) // width < 725
  },[width]);

  const SectionSizes = {
    start: 54, 
    end: -550, // sum of the width of all SectionItems
    move: 170, // approximate width of each SectionItem
  };

  const moveToRight = () => {
    if (transformPixel > SectionSizes.end) {
      setTransformPixel(transformPixel - SectionSizes.move)
    }
  };

  const moveToLeft = () => {
    if (transformPixel < SectionSizes.start) {
      setTransformPixel(transformPixel + SectionSizes.move)
    }
  };

  const nutricionATuMedida = [
    'rbpds7ghbt', // vkids
    'j40eykjgp6', // shake
    'anatste2we', // omnipluscaja
    'qmxz4dxlq9', //omniplusbote
    's9omfblcq2', // omniplussupreme
    'e53d4r3hb8', // supermixchocolate
    'gtfs2lkmm8', //supermixsupreme
  ];
  
  const controlDePeso = [
    'mtxns5d7lh', // cafezzino
    'pjt1wax88y', // dolcevita
    'dwojs605la', // fiber
    'rk2squ71zw', // thermogencoffeebote
    'zwerv8ui7e', // thermogencoffeecaja
    'w9as4biz39', // thermogentealimon
    'euayazcur0', // thermogenteamaracuya
  ];
  
  const energiaYRendimiento = [
    'v5izv5wo26', // aqtua
    'h8blaufecx', // biocrosbote
    'ese9nc90kc', // briocroscaja
    'gitu12xtru', // biocrossupreme
    'g4n20z9xqv', // ego10
    'dp85p194jw', // egolife
    'wtw41dsipr', // powermaker
    'i1q6k4ikb6', // powermakersupreme
  ];
  
  const digestionSaludable = [
    'havgutsdk8', // aloe200ml
    'ao733fzisx', // aloe960mllimon
    'ealgvw2efs', // aloe960mlanana
    'ja45fsg01r', // egofrutas
    'nekmvtn4qc', // egoherbal
    'dwojs605la', // fiber
  ];

  const handleCategory = (id, arrayCategory) => {
    if (category === undefined ) {
      setIsSelected(id);
      setIsFiltered(true);
      setCategory(arrayCategory);
    } else if (category.toString() === arrayCategory.toString()) {
      setIsSelected(undefined);
      setIsFiltered(false);
      setCategory(undefined);
    } else {
      setIsSelected(id);
      setIsFiltered(true);
      setCategory(arrayCategory);
    }
  }

  const handleclick = async (string) => {
    if (string === 'aZ') {
      setIsReverse(false)
      setProductList(allProducts);
    }
    if (string === 'zA') {
      setIsReverse(true)
      setProductList(allProducts.reverse());
    }

    if (string === 'nutricionATuMedida') {
      return handleCategory(1, nutricionATuMedida);
    }

    if (string === 'controlDePeso') {
      return handleCategory(2, controlDePeso);
    }

    if (string === 'energiaYRendimiento') {
      return handleCategory(3, energiaYRendimiento);
    }

    if (string === 'digestionSaludable') {
      return handleCategory(4, digestionSaludable);
    }

    return
  };

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
        <Sections>

          <SectionsContainer overflow="hidden" width="90%" justifyContent="center" transform="none" >

            <ArrowSvgLeft SectionSizes={SectionSizes} transformPixel={transformPixel} onClick={moveToLeft} top="0%" left="-1px" backgroundDeg="90deg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="10" fill="white"/>
                <path d="M12 5L7 10L12 15" stroke="black" strokeWidth="1.5"/>
              </svg>
            </ArrowSvgLeft>

            <SectionsContainer overflow="visible" width="100%" justifyContent="flex-start" transform={transformPixel}>
              { isReverse
                ?
                <SectionItem onClick={() => handleclick("aZ")}>
                  <p>Ordenar de A a la Z</p>
                </SectionItem>
                :
                <SectionItem onClick={() => handleclick("zA")}>
                  <p>Ordenar de Z a la A</p>
                </SectionItem>
              }

              <SectionItem {...isSelected === 1 && styleSelected} onClick={() => handleclick("nutricionATuMedida")}>
                <p>Nutricion a tu medida</p>
              </SectionItem>

              <SectionItem {...isSelected === 2 && styleSelected} onClick={() => handleclick("controlDePeso")}>
                <p>Control de peso</p>
              </SectionItem>

              <SectionItem {...isSelected === 3 && styleSelected} onClick={() => handleclick("energiaYRendimiento")}>
                <p>Energía y rendimiento</p>
              </SectionItem>

              <SectionItem {...isSelected === 4 && styleSelected} onClick={() => handleclick("digestionSaludable")}>
                <p>Digestión saludable</p>
              </SectionItem>

            </SectionsContainer>

            <ArrowSvgRight SectionSizes={SectionSizes} transformPixel={transformPixel} onClick={moveToRight} top="0" right="-1px" margin="0 10px 0 0" backgroundDeg="270deg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none">
                <rect x="20" y="20" width="20" height="20" rx="10" transform="rotate(-180 20 20)" fill="white"/>
                <path d="M8 15L13 10L8 5" stroke="black" strokeWidth="1.5"/>
              </svg>
            </ArrowSvgRight>
            
          </SectionsContainer>

        </Sections>

        <SectionsContainer flexDirection="column" width="90%" justifyContent="center" transform="none">

          <ProductList isDeviceCellphone={isDeviceCellphone} productList={productList} category={category} isFiltered={isFiltered}/>

        </SectionsContainer>

      </Main>

      <Footer/>

    </>
  )
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.graylight};
  padding-bottom: 20px;
`;

export const Sections = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  background-color: ${colors.orange};
  overflow: hidden;
`;

export const SectionsContainer = styled.div`
  will-change: transform;
  position: relative;
  flex-direction: ${({flexDirection}) => flexDirection};
  display: flex;
  width: ${({width}) => width};
  max-width: 1200px;
  transform: translateX(${({transform}) => transform}px);
  transition: all 0.4s ease-out;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: center;
  overflow: ${({overflow}) => overflow};
`;

export const ArrowSvgLeft = styled.div`
  position: absolute;
  padding: 13px;
  top: ${({top}) => top};
  left: ${({left}) => left};
  right: ${({right}) => right};
  background-color: ${colors.orange};
  z-index: 8000;
  background: linear-gradient(${({backgroundDeg}) => backgroundDeg}, ${colors.orange} 60%, rgba(255,255,255,0) 100%);
  opacity: ${({transformPixel, SectionSizes}) => transformPixel > (SectionSizes.start - 1) ? "0.5" : "1"};
  cursor: ${({transformPixel, SectionSizes}) => transformPixel > (SectionSizes.start - 1) ? "unset" : "pointer"};
`;

export const ArrowSvgRight = styled(ArrowSvgLeft)`
  opacity: ${({transformPixel, SectionSizes}) => transformPixel < SectionSizes.end ? "0.5" : "1"};
  cursor: ${({transformPixel, SectionSizes}) => transformPixel < SectionSizes.end ? "unset" : "pointer"};
`;

export const SectionItem = styled.button`
  display: flex;
  height: 32px;
  padding: 0 12px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(styleSelected) => styleSelected[0] || 'white'};
  color: ${(styleSelected) => styleSelected[1] || 'black'};
  border-radius: 20px;
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
`;
