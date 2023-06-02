import React from "react";

const Functions = () => {
  const getDayofTheWeek = () => {
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

  return <div></div>;
};

export default Functions;
