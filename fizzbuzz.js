/*This is the (in)famous FIZZBUZZ test.
 it goes from 1-20.
 The rules:
For numbers divisible by 3, print out "Fizz".
For numbers divisible by 5, print out "Buzz".
For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
Otherwise, just print out the number. */


for(var counter = 1 ; counter < 21 ; counter++) {
    if(counter % 5 === 0 && counter % 3 === 0){
        console.log("FizzBuzz");

    }
    else {
    if(counter % 3 === 0){
        console.log("Fizz");
    }
    if(counter % 5 === 0){
        console.log("Buzz");
    }
    if(counter % 5 !== 0 && counter % 3 !== 0){
        console.log(counter);
    }
    //end of else on line 15
    }

//end of for loop
}
