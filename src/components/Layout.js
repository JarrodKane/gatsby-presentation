import React from 'react';
import styled from 'styled-components';

import './reset.css';

const Container = styled.div`
  margin: 0px;
  //   fonts: 'Roboto, sans-serif';

  background: #542c85;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: 3rem;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #362066;
  color: white;
  width: 100vw;
  height: 90vh;
  padding: 50px 50px;

  img {
    width: auto;
    height: 40%;
  }
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 50%;
    height: 80%;
  }
`;

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export { Layout, ImageHolder };
