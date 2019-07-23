import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Boilerplate</h1>
      <h2>Stack</h2>
      <hr />
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
    </React.Fragment>
  )
}


export default IndexPage;