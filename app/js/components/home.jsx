import React, { PropTypes } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'multireducer';
import {increment} from '../redux/actions/index.js';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions } from 'react-md/lib/Cards';
import { Button } from 'react-md/lib/Buttons';
import CSSModules from 'react-css-modules';
import styles from '../../css/css-modules/home/test.css';
import axios from 'axios';

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	
	componentWillMount() {
		/*
		axios.get('http://localhost:8080/api/users')
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		*/
	}

	render() {
		console.log(this.props.list)
		return (
			<div>
				<h1 styleName="test-module">Test header styled by CSS module.</h1>
				<Card>
					<CardTitle title={"Counter: " + this.props.as} />
					<CardText>
						Click the action button to increment the counter with a specific key using multireducer.
					</CardText>
					<CardActions>
						<Button label="Action 1" onClick={() => this.props.increment()}/>
					</CardActions>
				</Card>
			</div>
		);
	}
}

function mapStateToProps(state, { as }) {
	console.log(as);
  return {
     counter: state.counterGroup[as],
  }
}

function mapDispatchToProps(dispatch , { as }) {
  return bindActionCreators({
    increment
  }, dispatch, as);
}

export default Home;