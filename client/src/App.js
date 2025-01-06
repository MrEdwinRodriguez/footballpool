import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav } from 'reactstrap';
import logo from './logo.svg';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Dashboard from './components/Dashboard';

import { Counter } from './features/counter/Counter';
import './App.css';
import EliminatorMain from './features/eliminator/EliminatorMain';
import UserRegisterForm from './features/user/UserRegisterForm';
import WeeklyPoolMain from './features/weeklypool/WeeklyPoolMain';
import Create from './features/create/Create';
import MyPools from './features/my_pools/MyPools';
import JoinPoolList from './features/join_pool/JoinPoolList';
import PoolInfo from './features/join_pool/PoolInfo';
import Pool from './features/my_pools/Pool';
import MakePicks from './features/my_pools/MakePicks';

function App() {
  return (
    <div className="App">
		<Header/>
		<Container>
			<Routes>
				<Route path='/' element={<Dashboard/>}/>
				<Route path='/eliminator' element={<EliminatorMain/>}/>
				<Route path='/mypools' element={<MyPools/>}/>
				<Route path='/mypool/:id' element={<Pool/>}/>
				<Route path='/makepicks/:id' element={<MakePicks/>}/>
				<Route path='/joinpool' element={<JoinPoolList/>}/>
				<Route path='/join/:id' element={<PoolInfo/>}/>
				<Route path='/register' element={<UserRegisterForm />}/>
				<Route path='/footballpool' element={<WeeklyPoolMain />}/>
				<Route path='/create' element={<Create />}/>
			</Routes>
			
		</Container>
   </div>
  );
}

export default App;
