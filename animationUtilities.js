const removeExistingAnimationClasses = circle => {
  if (circle.classList.contains("low")) circle.classList.remove("low");

  if (circle.classList.contains("high")) circle.classList.remove("high");

  if (circle.classList.contains("med")) circle.classList.remove("med");
};

const addAnimationClass = (data, circle) => {
  let style = document.documentElement.style;
  console.log("DATA: " + data);
  style.setProperty('--endLocation', circle.style.height + data + 'px');
  style.setProperty('--startLocation', circle.style.height + 'px');
  circle.classList.add("med");
  console.log(circle.style.height);
  circle.addEventListener("webkitAnimationEnd", () => {
    circle.style.height = circle.style.height + data + 'px';
    console.log(circle.style.height);
  });
};

const animateOnFrequency = (data, id) => {
  let circle = document.getElementById(id);
  removeExistingAnimationClasses(circle);
  void circle.offsetWidth;
  addAnimationClass(data, circle);
};

const setStylingForElement = newDiv => {
  newDiv.style.height = "10px";
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