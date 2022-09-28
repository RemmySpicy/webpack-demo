import myName from "./myName";
import "./style.css";
import _ from "lodash";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

console.log(myName('Remilekun'));
console.log(Data);
console.log(Notes);

document.body.appendChild(component());
