'use strict';


var root = (n, tolerance, iterations) => {
	tolerance = tolerance || 1e-7;
	iterations = iterations || 1e7;

	var upperBound = n;
	var lowerBound = 0;
	var i = 0;
	var square;
	var x;

	do {
		i++;
		x = (upperBound - lowerBound) / 2 + lowerBound;
		square = x * x;

		if (square < n) {
			lowerBound = x; 
		} else {
			upperBound = x;
		}
	} while (Math.abs(square - n) > tolerance && i < iterations);

	var roundX = Math.round(x);

	if (roundX * roundX === n) {
		x = roundX;
	}

	return x;
};

module.exports = root;