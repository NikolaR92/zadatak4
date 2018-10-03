import React from 'react';
import '../style/Restart.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { restart } from '../actions/index';

const mapDispatchToProps = dispatch => ({
	restartFunction: () => dispatch(restart()),
});


function Restart({ restartFunction }) {
	return (
		<button
			type="button"
			className="restart"
			onClick={() => restartFunction()}
		>
			{' Restart Game'}


		</button>
	);
}

Restart.propTypes = {
	restartFunction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Restart);
