import React, { Component } from 'react';
import '../style/Board.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Square from './Square';
import { removeSquares, visiteSquare, unvisit } from '../actions/index';

const mapStateToProps = state => ({
	squares: state.squares,
	visitedSquare: state.visitedSquare,
	foundCards: state.foundCards,
});

const mapDispatchToProps = dispatch => ({
	removeSquaresFunction: (i, j) => dispatch(removeSquares(i, j)),
	visiteSquareFunction: i => dispatch(visiteSquare(i)),
	unvisitFunction: j => dispatch(unvisit(j)),
});


class Board extends Component {
	// Method for  handling event of clicked square
	// args: i - integer, index of a clicked square
	handleClick(i) {
		const {
			visitedSquare, squares, visiteSquareFunction, removeSquaresFunction, unvisitFunction,
		} = this.props;
		// We check if two cards are clicked and if they are the same we remove them from the board
		// we use array with two elements ,that are indexes of the cards, for making a note
		// which card is selected

		if (visitedSquare.get(0) === -1 || visitedSquare.get(1) === -1) {
			visiteSquareFunction(i);
			const secondClickedCard = squares.get(i);
			const firstClickedCard = squares.get(visitedSquare.get(0));
			if (firstClickedCard === secondClickedCard && visitedSquare.get(0) !== -1
        && i !== visitedSquare.get(0)) {
				removeSquaresFunction(i, visitedSquare.get(0));
			}
		} else {
			unvisitFunction(visitedSquare.get(0));
			visiteSquareFunction(i);
		}
	}

	renderSquare(i) {
		const { squares } = this.props;
		if (squares.get(i) === -1) {
			return <div />;
		}
		return (
			<Square
				value={squares.get(i)}
				onClickFunction={() => this.handleClick(i)}
				index={i}
			/>
		);
	}

	render() {
		let status = '';
		const { squares, foundCards } = this.props;
		const array = squares.filter(x => x !== -1);

		if (array.size === 0) {
			status = 'Congratulate you finished a game';
		} else {
			status = `You have found: ${foundCards.toArray()}`;
		}

		return (
			<div className="Board">
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
					{this.renderSquare(3)}
				</div>
				<div className="board-row">
					{this.renderSquare(4)}
					{this.renderSquare(5)}
					{this.renderSquare(6)}
					{this.renderSquare(7)}
				</div>
				<div className="board-row">
					{this.renderSquare(8)}
					{this.renderSquare(9)}
					{this.renderSquare(10)}
					{this.renderSquare(11)}
				</div>
				<div className="board-row">
					{this.renderSquare(12)}
					{this.renderSquare(13)}
					{this.renderSquare(14)}
					{this.renderSquare(15)}
				</div>
			</div>
		);
	}
}

Board.propTypes = {
	squares: PropTypes.instanceOf(List).isRequired,
	visitedSquare: PropTypes.instanceOf(List).isRequired,
	foundCards: PropTypes.instanceOf(List).isRequired,
	visiteSquareFunction: PropTypes.func.isRequired,
	removeSquaresFunction: PropTypes.func.isRequired,
	unvisitFunction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
