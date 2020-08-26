function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumDistances function below.
function minimumDistances(a) {
var list = arguments[0];
var distances = [-1];
var distance;
var rest=[];


for(var i =0; i< list.length; i++ ){

    rest = a.slice(i+1,a.length); 
    // slice from the element to the end of array
    
    if(rest.includes(list[i]))
    {
        distance = rest.indexOf(list[i]) - i;
        distances.push(distance);
    }
}
return Math.min(distances);
}