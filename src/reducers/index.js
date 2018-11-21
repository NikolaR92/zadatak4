import { fromJS } from 'immutable';

import {
	RESTART,
	FIRSTCLICKED,
	SECONDCLICKED,
	MATCHED,
	UNVISITED,
	CHANGECARDS,
	ERROR,
} from '../actions';

import shuffleArray from '../js/randomArray';
import createCards from '../js/createCards';


const initialState = fromJS({
	squares: shuffleArray(createCards(16)),
	visitedSquares: new Array(16).fill(-1),
	error: '',
	numberOfColons: 4,
	numberOfRows: 4,
	firstClicked: -1,
	secondClicked: -1,
	numberOfCards: 8,

});


const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case FIRSTCLICKED:
		return (state.set('firstClicked', action.index)).setIn(['visitedSquares', action.index], 1);
	case SECONDCLICKED:
		return (state.set('secondClicked', action.index)).setIn(['visitedSquares', action.index], 1);
	case RESTART: {
		const numberOfCards = state.get('numberOfColons') * state.get('numberOfRows');
		const newSquares = shuffleArray(createCards(numberOfCards));
		const visitedSquares = state.get('visitedSquares').toJS().fill(-1);
		return fromJS({
			squares: newSquares,
			visitedSquares,
			error: '',
			numberOfColons: state.get('numberOfColons'),
			numberOfRows: state.get('numberOfRows'),
			firstClicked: -1,
			secondClicked: -1,
			numberOfCards: numberOfCards / 2,
		});
	}
	case MATCHED: {
		const number = (state.get('numberOfCards') - 1);
		const newState = (state.set('firstClicked', -1)).set('numberOfCards', number);
		return newState.setIn(['visitedSquares', action.index], 1);
	}
	case UNVISITED: {
		const newState = (state.set('firstClicked', action.index)).setIn(['visitedSquares', action.first], -1).setIn(['visitedSquares', action.index], 1);
		return (newState.set('secondClicked', -1)).setIn(['visitedSquares', action.second], -1);
	}
	case CHANGECARDS: {
		const length = action.colons * action.rows;
		return fromJS({
			squares: shuffleArray(createCards(length)),
			visitedSquares: new Array(length).fill(-1),
			error: '',
			numberOfColons: action.colons,
			numberOfRows: action.rows,
			firstClicked: -1,
			secondClicked: -1,
			numberOfCards: (length) / 2,
		});
	}
	case ERROR: {
		return state.set('error', action.message);
	}
	default:
		return state;
	}
};

export default rootReducer;
