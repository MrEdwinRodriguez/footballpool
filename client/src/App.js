import React from 'react';
import { Container, Navbar, NavbarBrand, Nav } from 'reactstrap';
import logo from './logo.svg';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
		<Header/>
		<Container>
			<div>BODY GOES HERE</div>
		</Container>
   </div>
  );
}

export default App;
