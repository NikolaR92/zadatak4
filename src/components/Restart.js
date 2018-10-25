import React, { Component } from 'react';
import '../style/Restart.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { restart } from '../actions/index';

/** Component for rendering resete button */
class Restart extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = props;
		this.boundActionCreators = bindActionCreators(restart, dispatch);
	}

	render() {
		const { dispatch } = this.props;
		return (
			<button
				type="button"
				className="restart"
				onClick={() => { dispatch(restart()); }}
			>
				{' Restart Game'}


			</button>
		);
	}
}

Restart.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Restart);
