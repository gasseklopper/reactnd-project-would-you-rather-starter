import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {

  render() {


    return (
      <Menu secondary>
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
          <Menu.Item>

          </Menu.Item>
					<NavLink to="/logout" exact className="item" activeClassName="active">
            Logout
          </NavLink>
        </Menu.Menu>
      </Menu>
    )
  }
}