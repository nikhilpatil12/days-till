function calculateDateDifference(date1, date2) {
  // Get the time in milliseconds for each date
  console.log(date1);
  console.log(date2);
  const time1 = date1.getTime();
  const time2 = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(time2 - time1);

  // Convert the difference to days
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.ceil(
    differenceInMilliseconds / millisecondsInADay
  );

  return differenceInDays;
}

const currentDate = new Date();

// Format the date as desired (e.g., "June 1, 2024")
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

// Display the date in the HTML element with id "dateDisplay"
document.getElementById("dateDisplay").textContent = formattedDate;

const optStartDate = new Date("11 Jul 2024");
// const formattedOptStartDate = optStartDate.toLocaleDateString(
//   undefined,
//   options
// );
const daysTillOpt = calculateDateDifference(optStartDate, currentDate);
document.getElementById("daysTillOpt").textContent = daysTillOpt;

const endgameDate = new Date("9 Oct 2024");
console.log(endgameDate);
const daysTillEndgame = calculateDateDifference(endgameDate, currentDate);
document.getElementById("daysTillEndgame").textContent = daysTillEndgame;
