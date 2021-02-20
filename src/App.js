import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Header from './components/Header'
import About  from './components/About'
import Portfolio from './components/Portfolio'
import CV from './components/CV'

const Body = styled.body`
  a {
    text-decoration: none;
  }
`;

const Container = styled.div` 
  width: 1024px;
  margin: auto;
  padding-top: 2em;

`;

function App() {
  return (
    <Body>
      <Container>
        <Header/>
        <About/>
        <Portfolio/>
        {/* <CV/> */}
      </Container>
    </Body>
  );
}

export default App;
