import React, { Component } from 'react';
import '../style/Restart.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { restart } from '../actions/index';

/** Component for rendering resete button */
class NewGame extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = props;
		this.boundActionCreators = bindActionCreators(restart, dispatch);
	}

	render() {
		const { dispatch } = this.props;
		return (
			<Link to="/game" href="/game">
				<button
					type="button"
					className="restart"
					onClick={() => { dispatch(restart()); }}
				>
					{' New Game '}


				</button>
			</Link>
		);
	}
}

NewGame.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default connect(null)(NewGame);
