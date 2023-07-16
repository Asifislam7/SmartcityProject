import React from "react";
import Navbaropt from "./Navbaroptions";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <MainHeader>
      <Link href="/">
        <img src="./images/logo1.jpeg" alt="logo" className="logo" style={{width:'200px'}}/>
        <h3>Advanced Aligarh</h3>
      </Link>
    <Navbaropt/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;

