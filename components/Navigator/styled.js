import styled from 'styled-components';
import { breakpoint, colors } from '../../styles/GlobalStyle';

export const Header = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${colors.blackgray};
  justify-content: center;

  z-index: 9001;
`;

export const Nav = styled.nav`
  display: flex;
  width: 90%;
  max-width: 1200px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 10;
  justify-content: center;
`;

export const InputSearch = styled.input`
  flex-grow: 2;
  width: 50px;
  height: 30px;
  padding-left: 10px;
  background-color: ${colors.white};
  font-size: 1.7rem;
  font-weight: 400;
  color: black;
  border: none;
  border-radius: 2px 0 0 2px;
`;

export const SearchButton = styled.button`
  display: flex;
  width: 35px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 0 2px 2px 0;
  background-color: ${colors.orange};

  & svg, & svg path {
    fill: ${colors.blackgray};
  }
`;

export const MenuButton = styled.button`
  display: flex;
  width: 35px;
  height: 30px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${colors.orange};

  & svg rect {
    fill: ${colors.blackgray};
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  flex-grow: 2;
  right: 0%;
  bottom: -100%;
  background-color: ${colors.blackgray};
  justify-content: center;

  @media only screen and ${breakpoint.large} {
    position: relative;
    width: unset;
    bottom: 0;
  };
`;

export const MenuList = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
`;

export const MenuOption = styled.li`
  box-sizing: border-box;
  display: flex;
  max-width: 30%;
  height: 100%;
  align-items: center;
  padding-bottom: 4px;

  & a {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }

  &:hover, &:focus-within {
    padding-bottom: 0;
    border-bottom: 4px solid ${colors.orange};
  }
`;