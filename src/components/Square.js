import React, { Component } from 'react';
import '../style/Square.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import img from '../logo.svg';
import * as Actions from '../actions/index';


const mapStateToProps = state => ({
	squares: state.squares,
	visitedSquare: state.visitedSquare,
});

/** Component for rendering Square */
class Square extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = props;
		this.boundActionCreators = bindActionCreators(Actions, dispatch);
		this.handleClick = this.handleClick.bind(this);
	}

	/** Method for  handling event of clicked square
	 * @param {Integer} i - Index of a clicked square
	 */
	handleClick(i) {
		const {
			visitedSquare, squares, dispatch,
		} = this.props;

		const [firstSquare, secondSquare] = visitedSquare.toJS();
		let squaresJS = squares.toJS();
		if (!(squaresJS[i].show)) {
		/** We check if two cards are clicked and if they are the same we remove them from the board
		 * we use array with two elements ,that are indexes of the cards, for making a note
		 * which card is selected
		 */
			if (firstSquare === -1) {
				const visitedAction = Actions.visiteSquare(i);
				dispatch(visitedAction);
			} else if (secondSquare === -1) {
				const visitedAction = Actions.visiteSquare(i);
				dispatch(visitedAction);


				const secondClickedCard = squaresJS[i];
				const firstClickedCard = squaresJS[firstSquare];
				if (firstClickedCard.number === secondClickedCard.number && firstSquare !== -1
				&& i !== firstSquare) {
					const removeAction = Actions.removeSquares(i, firstSquare);
					dispatch(removeAction);

					squaresJS = squares.toJS();
					let victor = squaresJS.map(x => x.show === true);
					victor = victor.reduce((x, y) => y === true && y === x);
					if (victor) {
						const victoryAction = Actions.victory();
						dispatch(victoryAction);
					}
				}
			} else {
				const unvisitAction = Actions.unvisit(firstSquare);
				dispatch(unvisitAction);
				const visitedAction = Actions.visiteSquare(i);
				dispatch(visitedAction);
			}
		}
	}


	render() {
		const { squares, visitedSquare, index } = this.props;
		const squaresJS = squares.toJS();
		const [firstClickedCard, secondClickedCard] = visitedSquare.toJS();
		let valueTmp = '';
		/** if index of a card is in visitedSquare list those cards must be filped
		 * and show value of that square
		 */
		if (firstClickedCard === index
        || secondClickedCard === index || squaresJS[index].show) {
			valueTmp = squaresJS[index].number;
		} else {
			valueTmp = <img src={img} alt="" />;
		}
		return (
			<button
				type="button"
				className="square"
				onClick={() => this.handleClick(index)}
			>
				{valueTmp}
			</button>
		);
	}
}

Square.propTypes = {
	visitedSquare: PropTypes.instanceOf(List).isRequired,
	squares: PropTypes.instanceOf(List).isRequired,
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(Square);
