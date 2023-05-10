import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk image" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to homecrafted! Our mission is to offer high-quality
            furniture at affordable prices to help make your home reflect your
            unique style. Our pieces are not only functional and comfortable,
            but also beautiful and stylish. We offer a wide selection of
            furniture styles and materials to fit any taste and budget, from
            modern and minimalist to classic and traditional. Our team is
            dedicated to providing excellent customer service and support to
            help you find the perfect piece for your home. Thank you for
            choosing us, and we can't wait to help you turn your home into a
            dream space!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
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
