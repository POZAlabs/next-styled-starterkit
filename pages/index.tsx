import React from 'react';
import styled from 'styled-components';

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Title>Boilerplate</Title>
      <h2>Stack</h2>
      <h3>CORE</h3>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
      </ul>
    </React.Fragment>
  )
}

const Title = styled.h1`
  color: #333333;
  font-size: 3rem;
  font-family: 'Arial';
`;

export default IndexPage;