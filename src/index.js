import _ from "lodash";
import printMe from "./print";
import './style.css';
import image from "./image.jpg";
import Books from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement('button');

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');

  // Add image to our existing div
  const myImage = new Image();
  myImage.src = image;

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(myImage);

  console.log(Books);
  console.log(Notes);

  return element;
}


document.body.appendChild(component());
