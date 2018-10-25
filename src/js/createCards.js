/**
 * Create Cards Module
 * @module src/createCards
 */

import Card from './Card';

/** Function creates all the cards on a board
 * @param {Integer} numberOfCards - Number of card to be created
 * @return {Array.<Card>} Array of Cards
 */
function createCards(numberOfCards) {
	if (numberOfCards % 2 !== 0) {
		return [];
	}
	const n = numberOfCards / 2;
	const array = [];
	for (let i = 1; i <= n; i += 1) {
		array.push(new Card(i));
		array.push(new Card(i));
	}
	return array;
}

export default createCards;
