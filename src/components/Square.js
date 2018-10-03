import React from 'react';
import '../style/Square.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import img from '../logo.svg';

const mapStateToProps = state => ({
	visitedSquare: state.visitedSquare,
});

function Square({
	visitedSquare, index, value, onClickFunction,
}) {
	let valueTmp = '';
	// if index of a card is in visitedSquare list those cards must be filped
	// and show value of that square
	if (visitedSquare.get(0) === index
        || visitedSquare.get(1) === index) {
		valueTmp = value;
	} else {
		valueTmp = <img src={img} alt="" />;
	}
	return (
		<button
			type="button"
			className="square"
			onClick={() => onClickFunction()}
		>
			{valueTmp}
		</button>
	);
}

Square.propTypes = {
	visitedSquare: PropTypes.instanceOf(List).isRequired,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	onClickFunction: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(Square);
