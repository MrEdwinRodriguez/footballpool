import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav } from 'reactstrap';
import logo from './logo.svg';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import { Counter } from './features/counter/Counter';
import './App.css';
import EliminatorMain from './features/eliminator/EliminatorMain';
import UserRegisterForm from './features/user/UserRegisterForm';

function App() {
  return (
    <div className="App">
		<Header/>
		<Container>
			<Routes>
				<Route path='/' element={<Dashboard/>}/>
				<Route path='/eliminator' element={<EliminatorMain/>}/>
				<Route path='/register' element={<UserRegisterForm />}/>
			</Routes>
			
		</Container>
   </div>
  );
}

export default App;
