module.exports = () => {
	var obj = {};

	obj.transpose = (arr) => {
		var result = new Array(arr[0].length);

		for (var i = 0; i < arr[0].length; i++) {
			result[i] = new Array(arr.length);

			for (var j = 0; j < arr.length; j++) {
				result[i][j] = arr[j][i];
			}
		}

		return result;
	};

	return obj;
}