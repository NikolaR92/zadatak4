export const REMOVE_PAIR = 'REMOVE_PAIR';
export const VISITED = 'VISITED';
export const UNVISIT = 'UNVISIT';
export const RESTART = 'RESTART';

export function removeSquares(i, j) {
	return { type: REMOVE_PAIR, indexes: [i, j] };
}

export function visiteSquare(i) {
	return { type: VISITED, index: i };
}

export function unvisit(i) {
	return { type: UNVISIT, index: i };
}

export function restart() {
	return { type: RESTART };
}
