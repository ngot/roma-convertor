;(function (name, definition) {
	var hasDefine = typeof define === 'function';
	var hasExports = typeof module !== 'undefined' && module.exports;
	if (hasDefine) {
		// AMD Module or CMD Module
		define(definition);
	} else if (hasExports) {
		// Node.js Module
		module.exports = definition();
	} else {
		this[name] = definition();
	}
})('roma-convertor', function () {

	function parse(num) {
		if (!num)
			return false;
		var digits = String(+num).split(""),
			key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
				"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
				"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
			roman = "",
			i = 3;
		while (i--)
			roman = (key[+digits.pop() + (i * 10)] || "") + roman;
		return new Array(+digits.join("") + 1).join("M") + roman;
	}

	function deParse(s) {
		s = String(s).toUpperCase();
		if (s.length > 15 || /[^MDCLXVI]/.test(s)) return NaN;
		var L = s.length, sum = 0, i = 0, next, val,
			R = {
				M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1
			};
		while (i < L) {
			val = s.charAt(i++);
			if (!R[val]) return NaN;
			val = R[val];
			next = R[(s.charAt(i) || 'N')] || 0;
			if (next > val) val *= -1;
			sum += val;
		}
		if (parse(sum) == s) return sum;
		return NaN;
	}

	return {
		parse: parse,
		deParse: deParse
	};
});