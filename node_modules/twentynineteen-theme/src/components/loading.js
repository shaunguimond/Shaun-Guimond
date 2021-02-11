import React from "react";
import { connect, styled } from "frontity";

const Loading = () => (
  <Container>
    <Loader><div></div><div></div></Loader>
  </Container>
);

export default connect(Loading);

const Container = styled.div`
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;

const Loader = styled.svg`

& {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
& div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
& div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

`;
