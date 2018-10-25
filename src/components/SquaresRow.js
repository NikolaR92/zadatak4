import React from 'react';
import '../style/Board.css';

import Square from './Square';
import config from '../js/config';

/** Function for creating and rendering Squares */
function SquaresRow() {
	const tmp = [];
	let n = 0;
	for (let i = 0; i < config.numberOfRows; i += 1) {
		const row = [];
		for (let j = 0; j < config.numberOfColoms; j += 1) {
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

export default SquaresRow;
