import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Header from './components/Header'
import About  from './components/About'
import Portfolio from './components/Portfolio'
import CV from './components/CV'
import Todo from './components/Todo'

const Body = styled.body`
  text-align: justify;
  color: ;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Container = styled.div` 
  width: 1024px;
  margin: auto;
  padding: 1.5em;
  padding-top: 2em;

  @media (max-width: 375px) {
    width: 360px;
  }

  @media (max-width: 800px) {
    width: 700px;
  }

`;

function App() {
  return (
    <Body>
      <Container>
        <Header/>
        <About/>
        <Portfolio/>
        {/* <CV/> */}
        <Todo/>
      </Container>
    </Body>
  );
}

export default App;
