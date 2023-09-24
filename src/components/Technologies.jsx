import styled from 'styled-components';
import { Container } from '../assets/js/styles';

const technologiesData = [
  {
    src: 'https://cdn.simpleicons.org/html5/BF616A',
    title: 'HTML5',
  },
  {
    src: 'https://cdn.simpleicons.org/css3/5E81AC',
    title: 'CSS3',
  },
  {
    src: 'https://cdn.simpleicons.org/javascript/EBCB8B',
    title: 'JavaScript',
  },
  {
    src: 'https://cdn.simpleicons.org/react/88C0D0',
    title: 'React',
  },
  {
    src: 'https://cdn.simpleicons.org/git/D08770',
    title: 'Git',
  },
  {
    src: 'https://cdn.simpleicons.org/gnubash/A3BE8C',
    title: 'GNU Bash',
  },
];

const Card = styled.div`
  display: flex;
  background-color: var(--nord1);
  flex-direction: column;
  margin: 0.75rem;
  border-radius: 0.625rem;
  width: 7.25rem;
  height: 7.25rem;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
`;

const Technologies = () => {
  return (
    <Container>
      {technologiesData.map((tech, index) => (
        <Card key={index}>
          <img src={tech.src} alt={tech.title} height='48px' />
          <Title>{tech.title}</Title>
        </Card>
      ))}
    </Container>
  );
};

export default Technologies;