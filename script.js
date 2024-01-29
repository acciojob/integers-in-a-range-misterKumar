// write your code here
function range(start, end){

	if(start <= end)
	{
		let result = [];  
		for(let i=start+1; i<end; i++)
			{
				result.push(i);
           } 
		return result;
	}
	else
	{
		return "Enter the Valid Numbers.";
	} 
}

// do not change the code below.

let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));