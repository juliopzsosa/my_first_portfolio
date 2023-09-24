import styled from 'styled-components';
import { Container } from '../assets/js/styles';
import Ciphage from '../assets/img/prjx-ciph.jpg';

const projectData = [
  {
    title: 'Ciphage',
    description: 'Project powered by Alura Latam for easy text encryption.',
    version: '1.0',
    demoLink: 'https://juliopzsosa.github.io/Ciphage/',
    sourceLink: 'https://github.com/juliopzsosa/Ciphage',
    imageSrc: Ciphage,
  },
];

const Card = styled.div`
  background-color: var(--nord1);
  margin: 2rem 1.5rem;
  border-radius: 0.625rem;
  width: 16rem;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  margin: 0.75rem 0;
`;

const Description = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin: 0 0.75rem;
`;

const Version = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin: 0.75rem 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.25rem 0 1rem 0;
  margin-top: auto;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
`;

const Button = styled.a`
  width: 5rem;
  transition: 600ms ease-in-out 0s;
  text-decoration: none;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 400;
  font-size: 0.825rem;
  border-radius: 0.625rem;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;
`;

const DemoButton = styled(Button)`
  color: var(--nord14);
  border: 2px solid var(--nord14);

  &:active {
    transition: 100ms ease-in-out 0s;
    background-color: var(--nord14);
    color: var(--nord2);
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    &:hover {
      transition: 600ms ease-in-out 0s;
      background-color: var(--nord14);
      color: var(--nord2);
    }
  }
`;

const SourceButton = styled(Button)`
  color: var(--nord15);
  border: 2px solid var(--nord15);

  &:active {
    transition: 100ms ease-in-out 0s;
    background-color: var(--nord15);
    color: var(--nord2);
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    &:hover {
      transition: 600ms ease-in-out 0s;
      background-color: var(--nord15);
      color: var(--nord2);
    }
  }
`;

const ProjectCard = ({ project }) => (
  <Card>
    <Image src={project.imageSrc} alt={project.title} />
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <Version>Version: {project.version}</Version>
    <ButtonsContainer>
      <DemoButton href={project.demoLink}>Demo</DemoButton>
      <SourceButton href={project.sourceLink}>Source</SourceButton>
    </ButtonsContainer>
  </Card>
);

const Projects = () => (
  <Container>
    {projectData.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </Container>
);

export default Projects;