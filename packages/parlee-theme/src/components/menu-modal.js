import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  backdrop-filter: blur(12px);
  background-color: var(--mobilebackground);
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  margin-left: -5px;
  margin-top: -5px;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: fixed;
  max-width: 250px;
  top: 100px;
  right: calc(50% - 125px);
  color: var(--darktext);
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 22px;
  text-align: center;
  padding: 1.2rem 0;
  color: var(--darktext);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.25);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: #72e0b8;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);
