import React from 'react';
import { Link } from 'react-router-dom';

function Option() {
	return (
		<Link to="/options" href="/options"><button type="button">Options</button></Link>
	);
}

export default Option;
