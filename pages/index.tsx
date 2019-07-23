import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AppStore } from '../store/type';
import { testingStore } from '../store/example';

const IndexPage: React.FC = () => {
  const { forTest } = useSelector((state: AppStore) => state.example)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(testingStore());
  }

  return (
    <React.Fragment>
      <Title>Boilerplate</Title>
      <h2> Test </h2>
      <ul>
        <ReduxButton onClick={handleClick}>
          React-Redux: <b>{forTest.toString()}</b>
        </ReduxButton>
        <li>.env: </li>
      </ul>
      <hr />
      <h2>Stack</h2>
      <h3>CORE</h3>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
      </ul>
      <h3>State Management</h3>
      <ul>
        <li>Redux</li>
        <li>React-Redux</li>
      </ul>
      <h3>CSS</h3>
      <ul>
        <li>Styled-Components</li>
      </ul>
      <h3>Test</h3>
      <ul>
        <li>Jest</li>
        <li>@Testing-Library/React</li>
      </ul>
      <h3>HTTP Client</h3>
      <ul>
        <li>Axios</li>
      </ul>
      <h3>ETC</h3>
      <ul>
        <li>Dotenv-Webpack</li>
      </ul>
      <hr />
    </React.Fragment>
  )
}

const Title = styled.h1`
  color: indianred
`;

const ReduxButton = styled.li`
  cursor: pointer;
  user-select: none;
`;

export default IndexPage;