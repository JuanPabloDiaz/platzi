var i = 0;
var txt = "Juan Diaz _";
var speed = 170;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
/*
var ii = 0;
var txt1 = "Web Developer _";
var speed1 = 170;

function typeWriterTwo() {
  setTimeout(typeWriterTwo, 2000);
  if (ii < txt1.length) {
    document.getElementById("typeMeTwo").innerHTML += txt1.charAt(ii);
    ii++;
    setTimeout(typeWriterTwo, speed1);
  }
}

*/
/* ------------------------------------------------------------------------------- */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedGreeting() {
  await sleep(2500);
  alert("Code The World!");
  /*
  await sleep(2000);
  console.log("Goodbye!");
*/
}

delayedGreeting();
