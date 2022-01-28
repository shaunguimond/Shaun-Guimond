import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Section>
    {/* If the list is a taxonomy, we render a title. */}
    {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}
    <Container>
    
      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
      </Container>
    </Section>
  );
};

export default connect(List);

const Section = styled.section`
  width: 100%;
  margin: 0px;
  padding: 24px;
  list-style: none;
  margin-top: 106px;
  min-height: 100vh;

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 800px));
  grid-gap: 32px;
  justify-content: center;
  

`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: var(--text);
  text-align: center;
`;
