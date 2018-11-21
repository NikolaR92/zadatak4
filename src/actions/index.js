import history from '../js/history';

export const RESTART = 'RESTART';
export const FIRSTCLICKED = 'FIRSTCLICKED';
export const SECONDCLICKED = 'SECONDCLICKED';
export const MATCHED = 'MATCHED';
export const UNVISITED = 'UNVISITED';
export const CHANGECARDS = 'CHANGECARDS';
export const ERROR = 'ERROR';

export function clicked(firstClicked, secondClicked, i, squares) {
	if (firstClicked === -1) {
		return { type: FIRSTCLICKED, index: i };
	}
	if (secondClicked === -1) {
		if (squares[firstClicked] === squares[i] && firstClicked !== i) {
			return { type: MATCHED, index: i };
		}
		return { type: SECONDCLICKED, index: i };
	}
	return {
		type: UNVISITED, first: firstClicked, second: secondClicked, index: i,
	};
}

export function restart() {
	return { type: RESTART };
}

export function changeNumberOfCards(colons, rows) {
	const colons1 = Number.parseInt(colons, 10);
	const rows1 = Number.parseInt(rows, 10);
	if (!(Number.isInteger(rows1) && Number.isInteger(colons1))) {
		return {
			type: ERROR,
			message: 'Row and Colons must be whole numbers',
		};
	}
	if (rows1 > 9 || rows1 < 2 || colons1 > 9 || colons1 < 2) {
		return {
			type: ERROR,
			message: 'Row and Colons must be range between 2 and 8',
		};
	}
	if ((colons1 * rows1) % 2 === 0) {
		history.push('/game');
		return {
			type: CHANGECARDS,
			rows: rows1,
			colons: colons1,
		};
	}
	return {
		type: ERROR,
		message: 'Number of rows multiplicated with number of colons must be even number',
	};
}
