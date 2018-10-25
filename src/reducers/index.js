import { List } from 'immutable';

import {
	REMOVE_PAIR,
	VISITED,
	UNVISIT,
	RESTART,
	VICTORY,
} from '../actions';
import shuffelArray from '../js/randomArray';
import createCards from '../js/createCards';
import config from '../js/config';

const cards = createCards(config.numberOfRows * config.numberOfColoms);
let error = '';
if (cards.length === 0) error = 'Invalide number of cards, the number of card should be even numbers';


const initialState = {
	squares: List(shuffelArray(cards)),
	visitedSquare: List([-1, -1]),
	victory: false,
	error,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case REMOVE_PAIR: {
		const pair1 = state.squares.get(action.indexes[0]);
		const pair2 = state.squares.get(action.indexes[1]);
		pair1.show = true;
		pair2.show = true;
		return {
			...state,
			squares: (state.squares.set(action.indexes[0], pair1)).set(action.indexes[1], pair2),
			visitedSquare: List([-1, -1]),
		};
	}
	case VISITED:
		return {
			...state,
			visitedSquare: (state.visitedSquare.get(0) === -1) ? state.visitedSquare.set(0, action.index) : state.visitedSquare.set(1, action.index),
		};
	case UNVISIT:
		return { ...state, visitedSquare: List([-1, -1]) };
	case RESTART: {
		const array = state.squares.toJS();
		array.forEach((x) => { x.show = false; });
		return {
			squares: List(array),
			visitedSquare: List([-1, -1]),
			victory: false,
			error: '',
		};
	}
	case VICTORY:
		return {
			...state,
			victory: true,
		};
	default:
		return state;
	}
};

export default rootReducer;
