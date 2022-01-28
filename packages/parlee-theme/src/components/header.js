import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Toggle from "./toggle";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Nav />
        <div className="buttons">
        <Toggle />
        <MobileMenu />
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

.buttons {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 24px;
  right: 24px;
}
  

`;

const Title = styled.h2`
  margin: 0;
  width: 250px;
  color: var(--darktext);
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
  margin-left: 48px;
  max-width: 150px;
`;
