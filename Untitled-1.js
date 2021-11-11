//     write a program that prints numbers (1-n), where n is an argument passed in. For multiples of three,
//you print the word “Fizz”, for multiples of five you print “Buzz. For multiples of both three and five you print “FIzzBuzz”
//     Otherwise print out the number.

// [11:33 AM] Dillo Raju
//     So if n = 15
// ​[11:33 AM] Dillo Raju
//     Return
// "1",
// "2",
// "Fizz",
// "4",
// "Buzz",
// "Fizz",
// "7",
// "8",
// "Fizz",
// "Buzz",
// "11",
// "Fizz",
// "13",
// "14",
// "FizzBuzz"

function fizz(number) {
  //15, 9

  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

def fizz (number) 
if (number % 15 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
end 