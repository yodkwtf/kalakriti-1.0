import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about-image" />
        <article>
          <div className="title">
            <h2>about us</h2>
            <div className="underline"></div>
          </div>
          <p>
            <strong>कलाkriti</strong> is an e-commerce platform that seeks to
            improve the online market for small-town and rural handicrafts
            companies. By offering a shared platform for the production,
            marketing, and sale of high-quality handicrafts and products, this
            application seeks to promote the Indian handicraft industry
            globally.
            <br />
            India's artisan legacy is both real and intangible, and when
            combined with its regional distinctiveness, it gives the nation a
            competitive worldwide advantage. With the correct assistance and a
            conducive business environment, the Indian craft market has the
            potential to grow to be a billion-dollar industry. Access to new
            markets will be increased by creating a systematic strategy that
            fosters the intrinsic worth of craft skills and creates
            opportunities for product design and manufacturing. In addition, as
            the industry develops and receives more traction, leveraging
            e-commerce for online visibility and operational efficiencies will
            show to be a crucial success factor.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    text-transform: normal;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
