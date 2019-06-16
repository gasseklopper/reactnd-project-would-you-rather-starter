import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {

  render() {


    return (
      <Menu primary>
				<NavLink to="/" exact className="item" activeClassName="active">
					Home
				</NavLink>
				<NavLink to="/add" exact className="item" activeClassName="active">
					Add Questions
				</NavLink>
				<NavLink to="/leaderboard" exact className="item" activeClassName="active">
					Leader Board
				</NavLink>
        <Menu.Menu position='right'>
					<NavLink to="/login" exact className="item" activeClassName="active">
            Login
          </NavLink>
					<NavLink to="/logout" exact className="item" activeClassName="active">
            Logout
          </NavLink>
        </Menu.Menu>
      </Menu>
    )
  }
}