import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let generateExcuse = () => {
  var first = "A";
  var adj = ["sleepy", "creepy", "sick", "disgusting", "bloody"];
  var noun = ["bear", "spaghetti monster", "car", "troll", "dragon"];
  var action = ["pulled out", "stabbed", "threw", "crushed", "swallowed"];
  var possesion = ["my keys", "my laptop", "my car", "drugs", "my bell"];
  var where = [
    "in the bathroom stall",
    "over my dog's grave",
    "at a snail festival",
    "back of the school",
    "at an underground flea circus"
  ];

  return (
    first +
    " " +
    adj[getRndInteger(0, 5)] +
    " " +
    noun[getRndInteger(0, 5)] +
    " " +
    action[getRndInteger(0, 5)] +
    " " +
    possesion[getRndInteger(0, 5)] +
    " " +
    where[getRndInteger(0, 5)] +
    "."
  );
};
