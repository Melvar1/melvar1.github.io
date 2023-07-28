const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Blue-heeler-pic.png") {
    myImage.setAttribute("src", "images/real-blue-heeler-Small.png");
  } else {
    myImage.setAttribute("src", "images/Blue-heeler-pic.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `I, ${myName}, agree that Blue Heelers are the best dog in the world`;
    }
  }
  
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `I, ${storedName}, agree that Blue Heelers are the best dog in the world`;
  }

myButton.onclick = () => {
    setUserName();
  };
  