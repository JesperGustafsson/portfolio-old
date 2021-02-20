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
  color: #000000;
  background-color: #e8efeb;

  a {
    color: black;
    text-decoration: none;

    :hover {
      color: green;
    }
  }
`;

const Container = styled.div` 
  width: 1024px;
  margin: auto;
  padding: 1.5em;
  padding-top: 2em;


  @media (max-width: 1090px) {
    width: 700px;
  }

  @media (max-width: 760px) {
    width: 310px;
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
