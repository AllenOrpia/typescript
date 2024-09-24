

// Code below is an example of type Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as number' | 'as-text';

//  Code below is the use of UNION TYPES

function combine(
  input1: Combinable,
  input2: Combinable,
//   The code below is an example of LITERAL TYPES
  resultConversion: ConversionDescriptor
) {
  let res;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }

  return res;

  //     if (resultConversion === 'as-number') {
  //         return +result
  //     } else {
  //         return res.toString()

  //     }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// lITERAL TYPES