function add (numbers){
//	checkNegative(numbers);

	if(numbers == "")
		return 0;
	
//	var delimeter = [numbers.split('\n')[0].substring(2)];

	if(numbers.includes(",") || numbers.includes("\n") || numbers.includes(";")){
		var numberArray = numbers.split(/;|,|\n/);
		return sum(numberArray);
	}
	else
		return parseInt(numbers);
}

function sum(numberArray){
	var total = 0;
	var totalNeg = [];
		for(var i=0 ; i < numberArray.length ; i++){
			if(numberArray[i] >= 0){
				if(numberArray[i] <= 1000){
				total += parseInt(numberArray[i]);
				}
			}
			else{
				totalNeg.push(numberArray[i]);
			}
		}
		if(totalNeg.length > 0){
			throw ("Negatives not allowed: " + totalNeg.join(', '));
		}
		else{
			return total;
		}
}

module.exports = add;


/*
function checkNegative(numbers){
	var totalNeg = [];
	var numberArray = numbers.split(/,|\n/g);
		for(var i = 0; i < numberArray.length ; i++){
			if(parseInt(numberArray[i] < 0)){
				totalNeg.push(numberArray[i]);
			}
		}
		if(totalNeg.length > 0){
			throw new Error("Negatives not allowed: " + totalNeg.join(', '));
		}
		else 
			return numbers;
}
*/

