import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
`;

const Code = styled.p`
  color: var(--nord3);
  font-weight: 800;
  font-size: 5rem;
  padding-bottom: 0.5rem;
`;

const CodeMessage = styled.p`
  color: var(--nord3);
  padding: 0 2rem;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
`;

const Page404 = () => {
  return (
    <StyledMain>
      <Code>404</Code>
      <CodeMessage>Sorry, there is nothing at this URL.</CodeMessage>
      <p style={{ paddingTop: '3rem' }}>
        Go{' '}
        <Link style={{ color: 'var(--nord5)' }} to='/'>
          Home
        </Link>
      </p>
    </StyledMain>
  );
};

export default Page404;