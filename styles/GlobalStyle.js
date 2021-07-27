import styled, { createGlobalStyle } from "styled-components";

export const breakpoint = {
  large: '(min-width: 725px)',
}

export const colors = {
  orange: '#FE9925',
  purple: '#66308C',
  trueblack: '#000000',
  blackgray: '#222',
  blacklight: '#3D3D3D',
  gray: '#808080',
  graylight: '#F1F1F1',
  white: '#FFFFFF',
}

export const Section = styled.section`
  display: ${({display}) => display || ''};
  width: ${({width}) => width || ''};
  max-width: ${({maxWidth}) => maxWidth || ''};
  height: ${({height}) => height || ''};
  flex-direction: ${({flexDirection}) => flexDirection || ''};
  justify-content: ${({justifyContent}) => justifyContent || ''};
  align-items: ${({alignItems}) => alignItems || ''};
  background-color: ${({backgroundColor}) => backgroundColor || ''};
  color: ${({color}) => color || ''};
  margin-top: ${({marginTop}) => marginTop || ''};
  padding-bottom: ${({paddingBottom}) => paddingBottom || ''};
`;

export const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({color}) => color};
  align-items: center;
  text-align: end;

  @media only screen and ${breakpoint.large} {
    height: 180px;
  }
`;

export const TitleSection = styled.h2`
  font-size: 2rem;

  @media only screen and ${breakpoint.large} {
    font-size: 2.8rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${({fontSize})  => fontSize || '1.4rem'};
  font-weight: ${({fontWeight})  => fontWeight || 700};
  text-align: ${({textAlign})  => textAlign || 'center'};

  @media only screen and ${breakpoint.large} {
    font-size: 1.6rem;
  }
`;

export const Anchor = styled.a`
  display: flex;
  width: ${({width}) => width || ''};
  min-height: ${({minHeight}) => minHeight || '50px'};
  justify-content: center;
  align-items: center;
  padding: ${({padding}) => padding || '5px 20px'};
  text-align: center;
  color: ${({color})  => color};
  font-size: 1.3rem;
  font-weight: 700;
  background-color: ${({backgroundColor}) => backgroundColor};
  margin-top: ${({marginTop}) => marginTop};
  margin-left: ${({marginLeft}) => marginLeft};
  cursor: pointer;
  border-radius: 4px;

  @media only screen and ${breakpoint.large} {
    font-size: ${({fontSizeLarge}) => fontSizeLarge || '1.8rem'};
  }

  & svg {
    align-items: baseline;
    margin-left: 10px;
  }
`;

export const Div = styled.div`
  box-sizing: ${({boxSizing}) => boxSizing || ''};
  position: ${({position}) => position || ''};
  display: ${({display}) => display || ''};
  width: ${({width}) => width || ''};
  max-width: ${({maxWidth}) => maxWidth || ''};
  height: ${({height}) => height || ''};
  flex-direction: ${({flexDirection}) => flexDirection || ''};
  justify-content: ${({justifyContent}) => justifyContent || ''};
  align-items: ${({alignItems}) => alignItems || ''};
  flex-wrap: ${({flexWrap}) => flexWrap || ''};
  flex-grow: ${({flexGrow}) => flexGrow || ''};
  background-color: ${({backgroundColor}) => backgroundColor || ''};
  color: ${({color}) => color || ''};
  margin-top: ${({marginTop}) => marginTop || ''};
  padding: ${({padding}) => padding || ''};
`;

export const ImageSvg = styled.svg`
  width: ${({widthSmall})  => widthSmall};
  fill: ${({fillColor})  => fillColor || ''};

  @media only screen and ${breakpoint.large} {
    width: ${({widthLarge})  => widthLarge || ''};
  }
`;

export const GlobalStyles = createGlobalStyle`

  *,html {
    list-style:none;
    margin:0;
    padding:0;
  }
  
  html {
  display:block;
  width:100%;
  height:100%;
  min-width:320px;
  font-size:62.5%;
  scroll-behavior:smooth;
  font-family: 'Inter', sans-serif, Helvetica;
  }

  body {
    transition: all 0.50s linear;
  }

  a {
  color:inherit;
  text-decoration:none;
  }

  figure,h1,p,ul {
    -webkit-margin-before:0;
    margin-block-start:0;
    -webkit-margin-after:0;
    margin-block-end:0;
    -webkit-margin-start:0;
    margin-inline-start:0;
    -webkit-margin-end:0;
    margin-inline-end:0;
    -webkit-padding-start:0;
    padding-inline-start:0;
  }
`;