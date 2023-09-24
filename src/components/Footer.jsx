import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--nord3);
  text-align: center;
  color: var(--nord4);
  margin-top: 3rem;
  padding: 1.66rem 3rem;

  @media (min-width: 1024px) and (orientation: landscape) {
    padding: 0.825rem 3rem;
    font-size: 0.825rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--nord5);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>
        {`Designed by me using `}
        <StyledLink href='https://vitejs.dev/'>Vite</StyledLink>
        {` and the `}
        <StyledLink href='https://www.nordtheme.com/'>Nord Theme</StyledLink>
        {` | ${currentYear}`}
      </p>
    </StyledFooter>
  );
};

export default Footer;