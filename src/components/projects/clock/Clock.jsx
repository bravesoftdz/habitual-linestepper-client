import React, { useEffect } from "react";

import "./Clock.css";

const Clock = () => {
  useEffect(() => {
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    const allHands = document.querySelectorAll(".hand");

    const setDate = () => {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      const hours = now.getHours();
      const hourDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;

      if (secondsDegrees === 90) {
        allHands.forEach(hand => (hand.style.transition = "none"));
      } else {
        allHands.forEach(hand => (hand.style.transition = ""));
      }

      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      minHand.style.transform = `rotate(${minsDegrees}deg)`;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    };

    setInterval(setDate, 1000);

    setDate();
  });
  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand min-hand"></div>
        <div className="hand second-hand"></div>
      </div>
    </div>
  );
};

export default Clock;
