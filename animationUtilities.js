const removeExistingAnimationClasses = circle => {
  if (circle.classList.contains("low")) circle.classList.remove("low");

  if (circle.classList.contains("high")) circle.classList.remove("high");

  if (circle.classList.contains("med")) circle.classList.remove("med");
};

const addAnimationClass = (data, circle) => {
  if (data < 40) {
    circle.classList.add("low");
  } else if (data > 50) {
    circle.classList.add("high");
  } else circle.classList.add("med");
};

const animateOnFrequency = (data, id) => {
  let circle = document.getElementById(id);
  removeExistingAnimationClasses(circle);
  void circle.offsetWidth;
  addAnimationClass(data, circle);
  /*
  circle.addEventListener("webkitAnimationEnd", () => {
    document.getElementById("main").removeChild(circle);
  });*/
};

const setStylingForElement = newDiv => {
  newDiv.style.height = "100px";
  newDiv.style.width = "100px";
  newDiv.style.borderRadius = "25px";
  newDiv.style.border = "1px solid";
  newDiv.style.backgroundColor = "red";
};

let previousFrequencyLength = 0;
const removeUnusedFrequncies = (frequencyLength, frequencyBaseName) => {
  if (previousFrequencyLength > frequencyLength){
    for (let i = frequencyLength; i < previousFrequencyLength; i++){
      document.getElementById("main").removeChild(document.getElementById(frequencyBaseName + i));
    }
  }
  previousFrequencyLength = frequencyLength;
}

const createFrequencyElements = frequencyLength => {
  removeUnusedFrequncies(frequencyLength, "Frequency");
  for (let i = 0; i < frequencyLength; i++) {
    let div;
    if (!document.getElementById("Frequency" + i)){
      div = document.createElement("div");
      div.setAttribute("id", "Frequency" + i);
    }
    else{
      div = document.getElementById("Frequency" + i);
    }

    setStylingForElement(div);
    document.getElementById("main").appendChild(div);
  }
};

module.exports = {createFrequencyElements, animateOnFrequency}