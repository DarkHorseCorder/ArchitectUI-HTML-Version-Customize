// CountUp Demo

import { CountUp } from "countup.js";

$(document).ready(() => {
  const optionsCountUp = {
    useEasing: true,
    separator: ",",
    decimal: ".",
    prefix: "$",
  };

  const optionsCountUp2 = {
    useEasing: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: "k",
  };

  const optionsCountUp3 = {
    useEasing: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: " %",
  };

  const optionsCountUp4 = {
    useEasing: true,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: " ",
  };

  const minNumber = 0;
  const maxNumber = 983;
  const maxNumber2 = 97;
  const maxNumber3 = 187;
  const maxNumber4 = 345;


  const randomNumber = randomNumberFromRange(minNumber, maxNumber);
  const randomNumber2 = randomNumberFromRange(minNumber, maxNumber2);
  const randomNumber3 = randomNumberFromRange(minNumber, maxNumber3);
  const randomNumber4 = randomNumberFromRange(minNumber, maxNumber4);


  function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // const countUp = new CountUp('count-up-wrapper', randomNumber, optionsCountUp);
  // if (!countUp.error) {
  //   countUp.start();
  // } else {
  //   console.error(countUp.error);
  // }
  // countUp.update(randomNumber);

  $(".count-up-wrapper").each(function () {
    const countUp = new CountUp('count-up-wrapper', randomNumber, optionsCountUp);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber2);
  });

  $(".count-up-wrapper-2").each(function () {
    const countUp = new CountUp('count-up-wrapper-2', randomNumber2, optionsCountUp2);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber);
  });

  $(".count-up-wrapper-2").each(function () {
    const countUp = new CountUp('count-up-wrapper-6', randomNumber4, optionsCountUp2);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber4);
  });

  $(".count-up-wrapper-2").each(function () {
    const countUp = new CountUp('count-up-wrapper-5', randomNumber4, optionsCountUp2);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber4);
  });

  $(".count-up-wrapper-3").each(function () {
    const countUp = new CountUp('count-up-wrapper-3', randomNumber3, optionsCountUp3);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber3);
  });

  $(".count-up-wrapper-3").each(function () {
    const countUp = new CountUp('count-up-wrapper-7', randomNumber3, optionsCountUp3);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber);
  });

  $(".count-up-wrapper-3").each(function () {
    const countUp = new CountUp('count-up-wrapper-8', randomNumber3, optionsCountUp3);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber3);
  });

  $(".count-up-wrapper-4").each(function () {
    const countUp = new CountUp('count-up-wrapper-4', randomNumber, optionsCountUp4);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
    countUp.update(randomNumber);
  });
});
