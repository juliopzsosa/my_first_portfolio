import styled from 'styled-components';

const Bar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--nord1);
  padding: 0 0;
  height: 3rem;
  box-shadow: rgba(36, 41, 51, 0.15) 0px 5px 10px 0px;
  position: fixed;
  width: 100vw;
  top: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1024px) and (orientation: landscape) {
    max-width: 1024px;
    justify-content: flex-end;
  }
`;

const NavLinks = styled.a`
  width: 6.25rem;
  text-decoration: none;
  font-family: 'JetBrains Mono';
  font-weight: 600;
  color: var(--nord4);
  text-align: center;

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 0.825rem;
  }
`;

const NavMenu = () => {
  return (
    <Bar>
      <LinksContainer>
        <NavLinks href='#'>Profile</NavLinks>
        <NavLinks href='#projects'>Projects</NavLinks>
        <NavLinks href='mailto:julio.pzsosa@gmail.com?subject=Julio,%20I%20want %20to%20get%20in%20touch%20with%20you'>
          Contact
        </NavLinks>
      </LinksContainer>
    </Bar>
  );
};

export default NavMenu;