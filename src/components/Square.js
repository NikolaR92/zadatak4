import React, { Component } from 'react';
import '../style/Square.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { List } from 'immutable';
import img from '../logo.svg';
import * as Actions from '../actions/index';


const mapStateToProps = state => ({
	squares: state.get('squares'),
	visitedSquares: state.get('visitedSquares'),
	firstClicked: state.get('firstClicked'),
	secondClicked: state.get('secondClicked'),
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
	 *
	 */
	handleClick() {
		const {
			dispatch, squares, firstClicked, secondClicked, visitedSquares, index,
		} = this.props;
		const ActionClicked = Actions.clicked(firstClicked, secondClicked, index, squares.toJS());
		if (visitedSquares.get(index) === -1) {
			dispatch(ActionClicked);
		}
	}


	render() {
		const { squares, visitedSquares, index } = this.props;
		let valueTmp = <img src={img} alt="" />;
		/** if index of a card is in visitedSquare list those cards must be flipped
		 * and show value of that square
		 */
		if (visitedSquares.get(index) === 1) {
			valueTmp = squares.get(index);
		}
		return (
			<button
				type="button"
				className="square"
				onClick={() => this.handleClick()}
			>
				{valueTmp}
			</button>
		);
	}
}

Square.propTypes = {
	visitedSquares: PropTypes.instanceOf(List).isRequired,
	squares: PropTypes.instanceOf(List).isRequired,
	index: PropTypes.number.isRequired,
	firstClicked: PropTypes.number.isRequired,
	secondClicked: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(Square);
