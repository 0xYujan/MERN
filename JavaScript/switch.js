// The switch statement is used to perform different actions based on the valuse of a variable

// //Syntax
// switch (value) {
//   case value1:
//     code block 1
//     break;

//   case value2:
//     code block 2
//     break;

//   default:
//   code for when none of the cases match
// }

// //example

// let currLight = "RED";

// switch (currLight) {
//   case "GREEN":
//     console.log("Go!");
//   break;
//   case "YELLOW":
//     console.log("WAIT");
//   break;

//   case "RED":
//     console.log("STOP");
//     break;

//   default:
//     console.log("INVALID COLOR");
// }

// WAP using switch to find GPA
//90 - 100 A+
//80 - 89 A
//70 - 79 B+
//60 - 69 B
//50 - 59 C+
// F

// let totalMarks = 500;
// let obtainMarks = 300;
// let percentage = (obtainMarks / totalMarks) * 100;

// switch (true) {
//   case percentage >= 90 && percentage <= 100:
//     console.log(`Your Grade is A+`);
//     break;
//   case percentage >= 80 && percentage < 90:
//     console.log(`Your Grade is A`);
//     break;
//   case percentage >= 70 && percentage < 80:
//     console.log(`Your Grade is B+`);
//     break;
//   case percentage >= 60 && percentage < 70:
//     console.log("Your grade is B");
//     break;
//   case percentage >= 50 && percentage < 60:
//     console.log("Your grade is C+");
//     break;

//   default:
//     console.log("Your grade is F");
// }

let totalMarks = 500;
let obtainMarks = 80;
let percentage = (obtainMarks / totalMarks) * 100;

switch (true) {
  case percentage >= 90:
    console.log(`Your Grade is A+`);
    break;
  case percentage >= 80:
    console.log(`Your Grade is A`);
    break;
  case percentage >= 70:
    console.log(`Your Grade is B+`);
    break;
  case percentage >= 60:
    console.log("Your grade is B");
    break;
  case percentage >= 50:
    console.log("Your grade is C+");
    break;

  default:
    console.log("Your grade is F");
}
