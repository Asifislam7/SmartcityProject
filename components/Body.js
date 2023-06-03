import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../constants/Context";
import "animate.css"
import Link from "next/link";

const HeroSection = () => {
//   const { image } = useGlobalContext();

  return (
    <Wrapper style={{backgroundColor:'black'}}>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Advanced Aligarh</p>
          <h1 className="hero-heading animate__animated animate__fadeInDown"style={{color:'rgb(140, 20, 252)'}}>Your goal is our mission</h1>
          <p className="hero-para animate__animated animate__fadeInUp" style={{color:'white'}}>
          Creating smart connected systems  for our urban areas provides a great many benefits for citizens around the world, not only to improve quality of life, but also to ensure sustainability and the best possible use of a city with such website can more efficiently manage infrastructure and maintenance, thereby reducing operating costs and improving the lives of its citizens.
          </p>
          <Button className="btn hireme-btn">
            <Link href="/contact"> Complain here </Link>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="hero.svg" alt="hero image" className="hero-img "/>
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
   
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
