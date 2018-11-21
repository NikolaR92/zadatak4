/**
 * Create Cards Module
 * @module src/createCards
 */

/** Function creates all the cards on a board
 * @param {number} numberOfCards - Number of card to be created
 * @return {Array.<number>} Array of Cards
 */
function createCards(numberOfCards) {
	if (numberOfCards % 2 !== 0) {
		return [];
	}
	const n = numberOfCards / 2;
	const array = [];
	for (let i = 1; i <= n; i += 1) {
		array.push(i);
		array.push(i);
	}
	return array;
}

export default createCards;
