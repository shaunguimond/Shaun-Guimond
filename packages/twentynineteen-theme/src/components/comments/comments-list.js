import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Container>
        {data.items.map(({ id }) => {
          return (
            <>
              <Comment>
                <CommentContent>
                  <Html2React
                    html={state.source.comment[id].content.rendered}
                  />
                </CommentContent>
                <CommentAuthor>
                  <p>Written by - {state.source.comment[id].author_name || "Anonymous"}</p>
                </CommentAuthor>
              </Comment>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

const Container = styled.div`
  margin: 40px;
  max-width: 800px;
  margin: 0px auto;
`;

const Comment = styled.div`
  padding: 20px;
  border-left: 15px solid #008077;
  box-shadow: inset 0 -8px #0080777d;
  
`;
const CommentContent = styled.div`
  padding-left: 10px;
  
  p {
      font-size: 1.075rem;
  }
`;

const CommentAuthor = styled.div`
    font-size: 0.775rem;

`;
