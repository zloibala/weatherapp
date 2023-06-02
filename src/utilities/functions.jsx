export const getDayofTheWeek = () => {
  let today = new Date();
  console.log("Today", today.getDay());
  switch (today.getDay()) {
    case 1:
      today = "monday";
      break;
    case 2:
      today = "Tuesday";
      break;
    case 3:
      today = "Wednesday";
      break;
    case 4:
      today = "Thursday";
      break;
    case 5:
      today = "Friday";
      break;
    case 6:
      today = "Saturday";
      break;
    case 0:
      today = "Sunday";
      break;
  }
  return today;
};
const getDayofTheMonth = () => {
  let date = new Date();
  switch (date.getMonth()) {
    case 0:
      date = "January";
      break;
    case 1:
      date = "February";
      break;
    case 2:
      date = "March";
      break;
    case 3:
      date = "April";
      break;
    case 4:
      date = "March";
      break;
    case 5:
      date = "May";
      break;
    case 6:
      date = "June";
      break;
    case 7:
      date = "July";
      break;
    case 8:
      date = "August";
      break;
    case 9:
      date = "September";
      break;
  }
};
