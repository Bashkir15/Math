'use strict';

import gcd from './gcd';

var genericLCM = (gcdFunction, a, b) => {
	if (a === 0 || b === 0) {
		return 0;
	}

	a = Math.abs(a);
	b = Math.abs(b);

	return a / gcdFunction(a,b) * b;
};

var lcmDivision = genericLCM.bind(null, gcd.division);
var lcmBinary = genericLCM.bind(null, gcd.binary);

module.exports = {
	division: lcmDivision,
	binary: lcmBinary
};