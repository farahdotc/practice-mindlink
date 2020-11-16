import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ProfilePage from './Pages/ProfilePage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Gigs from './Pages/Gigs'


function App(){
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/gigs" component={Gigs} />
			</Switch>
		</BrowserRouter>
	)
}

export default App