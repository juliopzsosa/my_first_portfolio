import styled from 'styled-components';
import NavMenu from '../components/NavMenu';
import Background from '../assets/img/background.jpg';
import Technologies from '../components/Technologies';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const sectionStyles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1024px',
  margin: '0 auto',
};

const Cover = styled.section`
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 0rem 2rem;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;

const Greeting = styled.p`
  display: block;
  font-weight: 800;
  font-size: 3.25rem;
  text-align: center;

  @media ((min-width: 768px) and (orientation: portrait)) or ((min-width: 1024px) and (orientation: landscape)) {
    font-size: 5.825rem;
  }
`;

const Title = styled.p`
  display: block;
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 0.325rem;
  text-align: center;

  @media ((min-width: 768px) and (orientation: portrait)) or ((min-width: 1024px) and (orientation: landscape)) {
    font-size: 1.825rem;
  }
`;

const Curriculum = styled.a`
  transition: 480ms ease-in-out 0s;
  text-decoration: none;
  padding: 0.5rem 0.875rem;
  font-weight: 400;
  font-size: 1rem;
  color: var(--nord5);
  border: 2px solid var(--nord5);
  border-radius: 0.625rem;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;

  &:active {
    transition: 100ms ease-in-out 0s;
    background-color: var(--nord8);
    border-color: var(--nord8);
    color: var(--nord2);
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    &:hover {
      transition: 480ms ease-in-out 0s;
      background-color: var(--nord8);
      border-color: var(--nord8);
      color: var(--nord2);
    }
  }
`;

const Icon = styled.span`
  font-size: 2.25rem;
  color: var(--nord5);
  transition: 480ms ease-in-out 0s;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;

  &:active {
    transition: 100ms ease-in-out 0s;
    color: var(--nord8);
  }

  &:hover {
    transition: 480ms ease-in-out 0s;
    color: var(--nord8);
  }
`;

const About = styled.p`
  text-align: center;
  font-weight: 200;
  padding-top: 2.5rem;

  @media ((min-width: 768px) and (orientation: portrait)) or ((min-width: 1024px) and (orientation: landscape)) {
    font-size: 1.325rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 13rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
`;

const socialLinks = [
  {
    url: 'https://github.com/juliopzsosa',
    icon: (
      <Icon>
        <AiFillGithub />
      </Icon>
    ),
    alt: 'Github',
  },
  {
    url: 'https://www.linkedin.com/in/juliopzsosa/',
    icon: (
      <Icon>
        <AiFillLinkedin />
      </Icon>
    ),
    alt: 'LinkedIn',
  },
];

const Root = () => {
  return (
    <>
      <NavMenu />
      <main>
        <Cover>
          <div style={{ maxWidth: '1024px' }}>
            <Greeting>Julio Paz</Greeting>
            <Title>Front-End Developer</Title>
            <About>
              Mechatronic engineer with a passion for computing and design,
              focused on creating minimalist and synergistic experiences.
            </About>
            <ContactContainer>
              <Curriculum href='https://docs.google.com/document/d/13_0rCCF_zpFiVz-Q0mzfOxCoyr8f1FTkDuvgj5cVvAM/export?format=pdf'>
                Resume
              </Curriculum>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </ContactContainer>
          </div>
        </Cover>
        <section style={sectionStyles}>
          <h1>Technologies</h1>
          <Technologies />
        </section>
        <section style={sectionStyles}>
          <h1>Education</h1>
          <Education />
        </section>
        <section id='projects' style={sectionStyles}>
          <h1>Projects</h1>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Root;