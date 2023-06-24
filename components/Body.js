import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../constants/Context";
import "animate.css"
import Link from "next/link";
import styles from "../styles/components/Services.module.css"
import Contact from "@/pages/Contact";

const HeroSection = () => {
  //   const { image } = useGlobalContext();

  return (
    <>
      <Wrapper style={{ backgroundColor: 'black' }}>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Advanced Aligarh</p>
            <h1 className="hero-heading animate__animated animate__fadeInDown" style={{ color: 'rgb(140, 20, 252)' }}>Your goal is our mission</h1>
            <p className="hero-para animate__animated animate__fadeInUp" style={{ color: 'white' }}>
              Creating Smart connected systems  for our urban areas provides a great many benefits for citizens around the world, not only to improve quality of life, but also to ensure sustainability and the best possible use of a city with such website can more efficiently manage infrastructure and maintenance, thereby reducing operating costs and improving the lives of its citizens.
            </p>
            <Button className="btn hireme-btn">
              <Link href="/Contact"> Complain here </Link>
            </Button>
          </div>

          {/* for image  */}
          <div className="section-hero-image">
            <picture>
              <img src="hero.svg" alt="hero image" className="hero-img " />
            </picture>
          </div>
        </div>
      </Wrapper>
      {/* Services section starts here */}
      <SectionWrapper className="section animate__animated animate__fadeInDown">
          <h2 className="common-heading">Our Services</h2>
          <div className="container grid grid-three-column">
            {/* <Firstyear image={"sewage.jpeg"} year={"Sewage"} title={"Sewage is the most prominent problem of the Aligarh nowadays and the solution is here"} /> */}
            <div className={styles.Services}>
              <Link href="/sewage">
                <img src="./images/sewage.jpeg" alt="" />
                <div>
                  <Button className="btn">Sewage</Button>
                </div>
              </Link>

              <Link href="/roads">
                <img src="./images/roads.jpeg" alt="" />
                <div>
                  <Button className="btn">Roads</Button>
                </div>
              </Link>

              <Link href="/waste">
                <img src="./images/waste.jpg" alt="" />
                <div>
                  <Button className="btn">Waste</Button>
                </div>
              </Link>
  
              <Link href="/pest">
                <img src="./images/pest.jpeg" alt="" />
                <div>
                  <Button className="btn">Pest</Button>
                </div>
              </Link>
            </div>
          </div>
      
      </SectionWrapper>
      <Contact/>
    </>
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

const SectionWrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default HeroSection;
