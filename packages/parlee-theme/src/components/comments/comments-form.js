import React from "react";
import { connect, styled } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <Container>  
    <h3>Comments</h3>
      <CommentForm
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}
        <CommentContentLabel for="content">
          <textarea
            id="content"
            name="content"
            placeholder="Write your comment here..."
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
        </CommentContentLabel>

        <CommentNameLabel for="name">
          <input
            id="name"
            name="author_name"
            placeholder="Your Name..."
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
          />
          {form?.errors?.authorName}
        </CommentNameLabel>

        <CommentEmailLabel for="email">
          <input
            id="email"
            name="author_email"
            placeholder="Your Email..."
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
          />
          {form?.errors?.authorEmail}
        </CommentEmailLabel>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

        {/* If the form was submitted successfully we can show a confirmation */}
        <p>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </p>

        <CommentFormSubmit type="submit" />
      </CommentForm>
    </Container>
  );
};

export default connect(CommentsForm);

const Container = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    padding: 8px;
    background-color: var(--background);
    h3 {
      color: var(--darktext);
      text-align: center;

    }
    p { 
      
      color: var(--darktext);
    }
`;

const CommentContentLabel = styled.label`
    grid-area: content;
    width: 100%;
    & textarea {
        height: 225px;
        width: calc(100% - 46px);
        background-color: var(--formbackground);
        padding: 12px 8px;
        border: black 0px solid;
        margin-left: 15px;
        color: var(--text);

    }
    & textarea::placeholder {
      color: var(--text);
    }
`;

const CommentNameLabel = styled.label`
    grid-area: name;
    width: 100%;
    & input {
      width: calc(100% - 46px);
        background-color: var(--formbackground);
        padding: 12px 8px;
        margin: 0px -4px;
        border: black 0px solid;
        margin-left: 15px;
        color: var(--text);
    }
    & input::placeholder {
      color: var(--text);
    }
`;

const CommentEmailLabel = styled.label`
    grid-area: email;
    width: 100%;
    & input {
      width: calc(100% - 46px);
        background-color: var(--formbackground);
        padding: 12px 8px;
        border: black 0px solid;
        margin-left: 15px;
        color: var(--text);
    }
    & input::placeholder {
      color: var(--text);
    }
`;

const CommentFormSubmit = styled.input`
    grid-area: submit;
    width: calc(100% - 46px);
    background-color: var(--formbackground);
    padding: 12px 8px;
    border: black 0px solid;
    margin-left: 23px;
    color: var(--text);


    &:hover {
      background-color: var(--background);
      color: var(--darktext);
    }
`;


const CommentForm = styled.form`
    display: grid;
    grid-template-areas:
        "name email"
        "content content"
        "submit submit";
    column-gap: 25px;
    row-gap: 25px;
`;