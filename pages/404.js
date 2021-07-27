import styled from 'styled-components';
import { GlobalStyles, colors } from "../styles/GlobalStyle";
import Link from 'next/link';


export default function Custom404() {
  return (
    <>
      <GlobalStyles/>

      <Background>
        <Title>404 - Página No Encontrada</Title>
        <Link href="/">
          <a>
            <Return>Volver</Return>
          </a>
        </Link>
      </Background>
    </>
  )
}

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blackgray};
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
`;

const Return = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;
