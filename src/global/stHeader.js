import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StHeader = styled.header`
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const StContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 47px;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StBrand = styled.div`
  margin-bottom: 0;
  z-index: 10;
`;

export const StImg = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  width: 100%;
`;

export const StMenuContainer = styled.div`
  display: flex;
  z-index: 9;
`;

export const StMenuNav = styled.nav`
  display: block;
  position: relative;
`;

export const StMenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 100%;
`;

export const StMenuLi = styled.li`
  display: inline-block;
  color: black;
`;

export const StLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
