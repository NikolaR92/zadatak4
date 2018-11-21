import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import * as Actions from '../actions';
import '../style/Options.css';

const mapStateToProps = state => ({
	error: state.get('error'),
});

class Options extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = props;
		this.boundActionCreators = bindActionCreators(Actions, dispatch);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			colons: 4,
			rows: 4,
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		const { dispatch } = this.props;
		const { colons, rows } = this.state;
		const ActionSubmitted = Actions.changeNumberOfCards(colons, rows);
		dispatch(ActionSubmitted);
	}

	handleOnChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		const { error } = this.props;
		return (
			<div>
				<h2>Options</h2>
				<p className="Error">{error}</p>
				<p>Here you can set how many row and colons of cards do you want</p>
				<form name="form" onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="colons">
							<p>Number of colons:</p>
							<input type="text" id="colons" name="colons" onChange={this.handleOnChange} />
						</label>
					</div>
					<div>
						<label htmlFor="rows">
							<p>Number of rows:</p>
							<input type="text" id="rows" name="rows" onChange={this.handleOnChange} />
						</label>
					</div>
					<button className="btn" type="submit">Set</button>
					<Link to="/game" href="/game" className="btn"><button type="button">Cancel</button></Link>
				</form>
			</div>);
	}
}

Options.propTypes = {
	dispatch: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Options);
