var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// FOR LOOP ---------------
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!");

    //What to do when click detected
  });
}

//WHILE LOOP VERSION -----------

// var i = 0;
// while (i < numberOfDrumButtons) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked!");

//     //What to do when click detected
//   });
//   i++;
// }
// -------------------------------
