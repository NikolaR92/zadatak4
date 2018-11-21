import React from 'react';
import '../style/Board.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Square from './Square';

const mapStateToProps = state => ({
	numberOfRows: state.get('numberOfRows'),
	numberOfColons: state.get('numberOfColons'),
});


/** Function for creating and rendering Squares */
function SquaresRow({ numberOfColons, numberOfRows }) {
	const tmp = [];
	let n = 0;
	for (let i = 0; i < numberOfRows; i += 1) {
		const row = [];
		for (let j = 0; j < numberOfColons; j += 1) {
			row.push(<Square
				key={n}
				index={n}
			/>);
			n += 1;
		}
		const key = `row${i}`;
		tmp.push(
			<div key={key} className="board-row">
				{row}
			</div>
		);
	}

	return tmp;
}

SquaresRow.propTypes = {
	numberOfRows: PropTypes.number.isRequired,
	numberOfColons: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(SquaresRow);
