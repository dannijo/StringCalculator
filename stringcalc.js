function add (numbers){
//	checkNegative(numbers);

	if(numbers == "")
		return 0;	
	
/*	Ef eg fer inn i thetta tha fer negative numbers i rugl!!!!

	var delimeter = [numbers.split('\n')[0].substring(2)];
		if(!checkDelimeter(delimeter)){
			var numberArray = numbers.split(delimeter);
			return sum(numberArray);
		}
*/
	if(numbers.includes(",") || numbers.includes("\n")){ // || numbers.includes(delimeter)){
		var numberArray = numbers.split(/,|\n/);
		return sum(numberArray);
	}
	else
		return parseInt(numbers);
}
function checkDelimeter(delimeter){
	if(delimeter >= 0 || delimeter < 0){
		return true;
	}
	return false;
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
			else if(numberArray[i] < 0){
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

//function getDelimeter(){}