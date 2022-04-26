function sum (accum = 0) {

	function accumSum (num) {
		return accum += num;
	}
	return accumSum;
}

const result = sum();