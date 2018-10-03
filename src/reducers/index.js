import { List } from 'immutable';
import {
	REMOVE_PAIR,
	VISITED,
	UNVISIT,
	RESTART,
} from '../actions';
import shuffelArray from '../js/randomArray';


const initialState = {
	squares: List(shuffelArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])),
	visitedSquare: List([-1, -1]),
	foundCards: List(),
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case REMOVE_PAIR:
		return {
			foundCards: state.foundCards.push(state.squares.get(action.indexes[0])),
			squares: (state.squares.set(action.indexes[0], -1)).set(action.indexes[1], -1),
			visitedSquare: List([-1, -1]),
		};
	case VISITED:
		return {
			...state,
			visitedSquare: (state.visitedSquare.get(0) === -1) ? state.visitedSquare.set(0, action.index) : state.visitedSquare.set(1, action.index),
		};
	case UNVISIT:
		return { ...state, visitedSquare: List([-1, -1]) };
	case RESTART:
		return initialState;
	default:
		return state;
	}
};

export default rootReducer;
