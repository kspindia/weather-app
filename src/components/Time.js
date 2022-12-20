import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Welcome, TimeStamp, Greeting } from "./TimeStyles.js";

function Time() {
  const today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning, khushboo.";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon, khushboo.";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening, khushboo.";
    } else {
      return "What are you doing up at this hour?";
    }
  };
  return (
    <Welcome>
      <TimeStamp>
        <Moment format="LT"></Moment>
      </TimeStamp>
      <Greeting>{greeting()}</Greeting>
    </Welcome>
  );
}

export default Time;
