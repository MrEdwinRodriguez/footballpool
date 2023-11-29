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
import WeeklyPoolMain from './features/weeklypool/WeeklyPoolMain';

function App() {
  return (
    <div className="App">
		<Header/>
		<Container>
			<Routes>
				<Route path='/' element={<Dashboard/>}/>
				<Route path='/eliminator' element={<EliminatorMain/>}/>
				<Route path='/register' element={<UserRegisterForm />}/>
				<Route path='/footballpool' element={<WeeklyPoolMain />}/>
			</Routes>
			
		</Container>
   </div>
  );
}

export default App;
