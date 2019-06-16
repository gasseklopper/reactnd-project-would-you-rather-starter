import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import Home from './Views/Home'
import Logout from './Views/Logout'
import Leaderboard from './Views/Leaderboard'
import AddPoll from './Views/AddPoll'
import Login from './Views/Login'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


class RatherApp extends React.Component {
	render() {
		return (
			<Router>
			<div className="App">
				<header className="App-header">
	<Container>
		<Navigation/>
			<Grid columns={1} divided>
				<Grid.Row stretched>
					<Grid.Column>
						<Switch>

								<Route exact path='/' render={() => (<Home/>)} />
								<Route exact path='/logout' render={() => (<Logout/>)} />
								<Route exact path='/leaderboard' render={() => (<Leaderboard/>)} />
								<Route exact path='/add' render={() => (<AddPoll/>)} />
								<Route render={() => <Login/>}/>


						</Switch>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		<Footer/>
	</Container>




			</header>
		</div>
		</Router>
	);
	}
}
export default RatherApp
