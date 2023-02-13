// Guided Tours

import introJs from "intro.js";

$(document).ready(() => {
  $(".start-tour").click(function () {
    introJs().start();
  });
});
