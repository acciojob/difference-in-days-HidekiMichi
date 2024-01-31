var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let dateOne=date1.split('-');
	let dateTwo=date2.split('-');
	return dateTwo[2]-dateOne[2];
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
