import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Container, Button, Grid } from 'semantic-ui-react'
import Home from './Views/Home'
import Logout from './Views/Logout'
import Leaderboard from './Views/Leaderboard'
import AddPoll from './Views/AddPoll'
import Answered from './Views/Answered'
import Unanswered from './Views/Unanswered'
import Login from './Views/Login'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100)
	},
	signOut(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	 {...rest} render={(props) => (
		fakeAuth.isAuthenticated === true
		? <Component {...props}/>
		: <Redirect to='/login'/>
	)}/>
)


class RatherApp extends Component {
	  state = {
    redirectToReferrer: "false"
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({

        redirectToReferrer: true

      }))
    })
  }
	render() {
		    // const { redirectToReferrer } = this.state
    // if (redirectToReferrer === true ) {
    //   return (
    //     <Redirect to='/' />
    //   )
    // }
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<Container>
							<Navigation/>
								<Grid columns={1} divided>
									<Grid.Row stretched>
										<Grid.Column>
											<Button  onClick={this.login} fluid>Login {this.state.redirectToReferrer}</Button>
											<Switch>
												<PrivateRoute exact path='/'component={Home} />
												<Route exact path='/logout' component={Logout}/>
												<PrivateRoute exact path='/leaderboard' component={Leaderboard} />
												<PrivateRoute exact path='/add' component={AddPoll} />
												<PrivateRoute exact path='/question/answered' component={Answered} />
												<PrivateRoute exact path='/question/unanswered' component={Unanswered} />
												<Route  component={Login}  reeedirectToReferrer={this.state.redirectToReferrer}/>
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
