import React from 'react';
import '../style/Board.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SquaresRow from './SquaresRow';


const mapStateToProps = state => ({
	numberOfCards: state.get('numberOfCards'),
});

/** Function for rendering Board with messages or Squares */
function Board({ numberOfCards }) {
	let tmp = (<SquaresRow />);
	if (numberOfCards === 0) {
		tmp = 'Victory!!!!';
	}
	return (
		<div className="Board">

			{tmp}
		</div>
	);
}

Board.propTypes = {
	numberOfCards: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Board);
