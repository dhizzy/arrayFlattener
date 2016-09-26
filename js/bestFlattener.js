/*
	flatten() is a recursive function that translates a multi-dimensional array into a flat array
		myarray (array) - represents the array you wish to flatten
		newarray (array) - represents the flat array you're building

*/

function flatten(myarray, newarray){
// for loop to access array items by index
	for (var i = 0; i < myarray.length; i++){
	// check if this is an array
		if (Array.isArray(myarray[i])){
		/* 	this function calls itself if this is an array item, passing the array 
			item as well as what we have for newarray
		*/
			flatten(myarray[i], newarray);
		}else{
			// otherwise, just push the item into newarray
			newarray.push(myarray[i]);
		}
	}
	return newarray;
}