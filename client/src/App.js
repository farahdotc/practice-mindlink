import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ProfilePage from './Pages/ProfilePage'

function App(){
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
        <Route exact path="/profile" component={ProfilePage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App