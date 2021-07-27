import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle'
import { breakpoint } from '../../styles/GlobalStyle';
// Footer

export const FooterSection = styled.footer`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  background-color: ${colors.blackgray};
  padding: 20px 0;
  justify-content: center;
  ${({position}) => { if (position) return 'bottom: 0;' }}
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  
  @media only screen and ${breakpoint.large} {
  font-size: 1.4rem;
  }
`;

