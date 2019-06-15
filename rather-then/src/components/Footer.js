import React, { Component } from "react";
import { Segment, Container } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
		<Segment inverted  className="footer" color = 'red' style = {
			{
				marginTop: "3em",
				padding: "3em",
				width: "100%"
			}}>
				<Container textAlign = 'center' style = {
					{
						fontSize: "0.9em"
					}
				}>
					{new Date().getFullYear()},footer Would You Rather app created using React,
		Redux, React Router, Semantic UI and friends.
				</Container>
		</Segment >
    )
  }
}

export default Footer
