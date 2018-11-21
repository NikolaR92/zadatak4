/**
 * Random Array Module
 * @module src/randomArray
 */


/**  Function shuffels a array of numbers from 1 to n using Fisher–Yates shuffle algorithm
 * @param {Array.<number>} array - Array of Cards
 * @returns {Array.<number>} Array of randomly shuffled Cards
 */
function shuffleArray(array) {
	const randomArray = array.slice();

	/** Fisher-Yates algorithm */
	for (let i = 0; i < randomArray.length - 2; i += 1) {
		const j = Math.floor(Math.random() * ((randomArray.length) - i)) + i;
		const tmp = randomArray[i];
		randomArray[i] = randomArray[j];
		randomArray[j] = tmp;
	}
	return randomArray;
}

export default shuffleArray;
