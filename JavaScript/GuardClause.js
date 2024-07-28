// Guard Clause using NOT operator
// let fname = "CODE";
// let lname = "BREAKER";

// let username = "";

// if (!username) {
//   username = prompt("Please enter your username");
// }

// document.write(`Welcome @${username}`);

// WAP to check whether Nepal Mega BCA open or close
// condition
// college time 10 to 17 (While defining vatiable for it keep time in )
// College close on weekend
//// College close on holiday

// let collegeOpen = 10;
// let collegeClose = 17;
let weekend = false;
let holiday = false;
let time = 1;

if (time < 10 || time > 17 || holiday || weekend) {
  console.log("College is close  ");
} else {
  console.log("College is open ");
}
