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