//  Function shuffels a array of numbers from 1 to 8 using Fisher–Yates shuffle algorithm
// arguments: array - array of numbers
// returns: array of randomly shuffled numbers
function shuffelArray(array) {
	const randomArray = array.slice();

	// Fisher-Yates algorithm
	for (let i = 0; i < randomArray.length - 2; i += 1) {
		const j = Math.floor(Math.random() * ((randomArray.length) - i)) + i;
		const tmp = randomArray[i];
		randomArray[i] = randomArray[j];
		randomArray[j] = tmp;
	}

	return randomArray;
}

export default shuffelArray;
