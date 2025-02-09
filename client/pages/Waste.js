import * as React from 'react';

import 'animate.css';
import Link from 'next/link';
import styled from "styled-components";
import {Button} from "../styles/Button"


export default function BasicButtons() {
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
    color: ${({ theme }) => theme.colors.text};
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
    border-radius: 20px;
  }
  .hero-img:hover {
 transform: scale(0.9);
 transition-duration : 2s;
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
  return (
     <>
        <Wrapper style={{ backgroundColor: 'white' }}>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">Waste Collection</p>
            <h1 className="hero-heading animate__animated animate__fadeInDown" style={{ color: 'rgb(140, 20, 252)' }}>Waste Management</h1>
            <p className="hero-para animate__animated animate__fadeInUp" style={{color:'black'}}>
              Creating Smart connected systems  for our urban areas provides a great many benefits for citizens around the world, not only to improve quality of life, but also to ensure sustainability and the best possible use of a city with such website can more efficiently manage infrastructure and maintenance, thereby reducing operating costs and improving the lives of its citizens.
            </p>
            <Button>
              <Link href="/Wastemanage"> Go to Form Section </Link>
            </Button>
          </div>
          {/* for image  */}
          <div className="section-hero-image">
            <picture>
              <img src="/images/waste.jpg" alt="hero image" className="hero-img" />
            </picture>
          </div>
        </div>
      </Wrapper>

      </> 
    
  );
}