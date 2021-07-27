import styled from 'styled-components';

import Image from 'next/image'
import { colors } from "../../styles/GlobalStyle";

export default function CountryList({allCountries, isDeviceCellphone}) {

  return (
    <>
      {allCountries.map((country) => (
        <Country key={country.id} href={country.link} title={`Registrarse como residente en: ${country.name}`}>

          <div>
            <Image width="50" height="50" src={country.image} alt="Alimento nutricional: Focus" />
            <CountryName isDeviceCellphone={isDeviceCellphone}>{country.name}</CountryName>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10" fill="none">
            <path fill={colors.blackgray} d="M3.91304 2.38261C4.24441 2.38261 4.51304 2.11398 4.51304 1.78261C4.51304 1.45124 4.24441 1.18261 3.91304 1.18261V2.38261ZM1 1.78261V1.18261C0.668629 1.18261 0.4 1.45124 0.4 1.78261H1ZM1 9H0.4C0.4 9.33137 0.668629 9.6 1 9.6L1 9ZM8.21739 9V9.6C8.54876 9.6 8.81739 9.33137 8.81739 9H8.21739ZM8.81739 6.08696C8.81739 5.75559 8.54876 5.48696 8.21739 5.48696C7.88602 5.48696 7.61739 5.75559 7.61739 6.08696H8.81739ZM3.48878 5.66269C3.25446 5.89701 3.25446 6.27691 3.48878 6.51122C3.72309 6.74554 4.10299 6.74554 4.33731 6.51122L3.48878 5.66269ZM9 1H9.6V0.4H9V1ZM5.86956 0.4C5.53819 0.4 5.26956 0.668629 5.26956 1C5.26956 1.33137 5.53819 1.6 5.86956 1.6V0.4ZM8.4 4.13043C8.4 4.46181 8.66863 4.73043 9 4.73043C9.33137 4.73043 9.6 4.46181 9.6 4.13043H8.4ZM3.91304 1.18261H1V2.38261H3.91304V1.18261ZM0.4 1.78261V9H1.6V1.78261H0.4ZM1 9.6H8.21739V8.4H1V9.6ZM8.81739 9V6.08696H7.61739V9H8.81739ZM4.33731 6.51122L9.42426 1.42426L8.57573 0.575736L3.48878 5.66269L4.33731 6.51122ZM9 0.4H5.86956V1.6H9V0.4ZM8.4 1V4.13043H9.6V1H8.4Z" />
          </svg>

        </Country>
      ))
      }
    </>
  )
}

export const Country = styled.a`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: ${colors.white};
  border-radius: 4px;
  cursor: pointer;
  border-bottom: 1px solid ${colors.graylight};

  & div {
    display: flex;
    align-items: center;
  }

  &:hover, &:focus {
    background-color: ${colors.orange}
  }
`;

export const CountryName = styled.p`
  font-size: ${({isDeviceCellphone}) => isDeviceCellphone ? "1.9rem" : "2rem"};
  margin: 0 10px;
`;