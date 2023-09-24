import styled from 'styled-components';
import { Container } from '../assets/js/styles';
import LogoAlura from '../assets/img/alura-latam.png';
import LogoIttehuacan from '../assets/img/ittehuacan.png';

const educationData = [
  {
    logo: LogoAlura,
    title: 'Front-End Training',
    description: '2023 - Alura Latam + Oracle Next Education',
  },
  {
    logo: LogoIttehuacan,
    title: "Bachelor's Degree in Mechatronics Engineering",
    description: '2013 - Instituto Tecnológico de Tehuacán',
  },
];

const Card = styled.div`
  display: flex;
  background-color: var(--nord1);
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 2rem;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(36, 41, 51, 0.55) 0px 5px 10px 0px;
`;

const Title = styled.h3`
  font-weight: 600;
  text-align: center;
  margin: 0.825rem 0rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin: 0rem 1rem;
`;

const Institution = styled.div`
  width: 16rem;
  margin: 2rem 1.5rem;
`;

const Education = () => {
  return (
    <Container>
      {educationData.map((item, index) => (
        <Institution key={index}>
          <Card>
            <img src={item.logo} height='72px' alt={item.title} />
          </Card>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Institution>
      ))}
    </Container>
  );
};

export default Education;