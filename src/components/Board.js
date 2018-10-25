import React from 'react';
import '../style/Board.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SquaresRow from './SquaresRow';


const mapStateToProps = state => ({
	victory: state.victory,
	error: state.error,
});

/** FUnctiono for rendering Board with messages or Squares */
function Board({ victory, error }) {
	let tmp = '';
	if (victory) {
		tmp = 'Victory!!!!';
	} else if (error) {
		tmp = error;
	} else {
		tmp = (<SquaresRow />);
	}

	return (
		<div className="Board">
			{tmp}
		</div>
	);
}

Board.propTypes = {
	victory: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Board);
