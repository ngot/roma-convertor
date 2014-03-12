;(function (name, definition) {
	var hasDefine = typeof define === 'function';
	var hasExports = typeof module !== 'undefined' && module.exports;
	if (hasDefine) {
		// AMD Module or CMD Module
		define(definition);
	} else if (hasExports) {
		// Node.js Module
		module.exports = definition();
	}else{
		this[name] = definition();
	}
})('roma_number', function () {

	function parse(number){
		switch(number){
			case 1:
			return "I";
			case 5: 
			return "V";
			case 10: 
			return "X";
			case 50: 
			return "L";
			case 100: 
			return "C";
			case 500: 
			return "D";
			case 1000: 
			return "M";
			default:
			return "not found!";	
		}
	}

	function deParse(roma){
		switch(roma){
			case "I": 
			return 1;
			case "V": 
			return 5;
			case "X": 
			return 10;
			case "L": 
			return 50;
			case "C": 
			return 100;
			case "D": 
			return 500;
			case "M": 
			return 1000;
			default:
			return "not found!";	
		}
	}	

	return {
		parse : parse,
		deParse: deParse
	};
});