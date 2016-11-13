'use strict';

var gcdDivision = (a, b) => {
	var tmp = a;
	a = Math.max(a, b);
	b = Math.min(tmp, b);

	while (b !== 0) {
		tmp = b;
		b = a % b;
		a = tmp;
	}

	return a;
};

var gcdBinary = (a, b) => {
	var shift;
	var tmp;

	if (a === 0) {
		return b;
	}

	if (b === 0) {
		return a;
	}

	// Let shift = log(K), where K is the greatest power of 2
	// then dividing by both a and b

	for (shift = 0; ((a | b) & 1) === 0; shift++) {
		a >>= 1;
		b >>= 1;
	}

	// remove all factors of 2 in a -- they wil not be common
	while ((a & 1) === 0) {
		a >>= 1;
	}

	// a is always odd

	do {

		// remove all factors of 2 in b -- they will not be common
		while ((b & 1) === 0) {
			b >>= 1;
		}

		// now a and b are both odd
		if (a > b) {
			tmp = b;
			b = a;
			a = tmp;
		}

		b -= a;
	} while (b !== 0);

	//restore common factors of 2
	return a << shift;
};

module.exports = {
	division: gcdDivision,
	binary: gcdBinary
};