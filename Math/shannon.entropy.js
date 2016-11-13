'use strict';

var shannonEntropy = (arr) => {
	var frequency = arr.reduce((acc, item) => {
		acc[item] = acc[item] + 1 || 1;
		return acc;
	}, {});

	var probability = Object.keys(freqs).map((key) => {
		return freqs[key] / arr.length;
	});

	return probability.reduce((e, p) => {
		return e - p * Math.log(p);
	}, 0) * Math.LOG2E;
};

module.exports = shannonEntropy;