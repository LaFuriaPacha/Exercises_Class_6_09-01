// range function
function range( start, end, increment ) {
  
    // create the result array
    var result = [];
    
    // test to see if we have an increment, otherwise set it to 1
    if ( increment == undefined )
      increment = 1;
    
    // calculate the number of times to loop (this is because you might be going 
    // up or down with your increment)
    loopNumber = Math.abs( (end - start)/ increment ) + 1 ;
    
    // loop that many times
    for ( let i = 0; i < loopNumber ; i ++ ) {
    
      // add (push) the value of start to the array
      result.push( start );
       
      // increment the value of start
      start += increment;
    }
    
    // return the array with all the things in it
    return result;
}
function product( numArray ) {
    // set a variable to hold the sum
    var arrayTotal = 0;
    
    // see how many numbers are in the array
    numLoops = numArray.length;
    
    // loop that many times
    for ( var i = 0; i < numLoops; i ++ ) {
      // add the number at that index to the sum
      arrayTotal += numArray[i];
    }
    // return the sum
    return arrayTotal;
  }
  
  console.log(range(34, 10));

  console.log(range(20, 25));

  console.log(product(range(1, 10)), product(range(2, 10)));


