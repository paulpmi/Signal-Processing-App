const removeExistingAnimationClasses = circle => {
  if (circle.classList.contains("Class" + circle.className)) circle.classList.remove("Class" + circle.className);
};

const addAnimationClass = (newFrequency, circle) => {
  let style = document.documentElement.style;
  console.log("START POINT: " + circle.style.height);

  const endPoint = newFrequency + 'px';
  circle.animate([ {height: circle.style.height}, {height: endPoint} ], {duration: 100});
  circle.style.height = endPoint;
  
  /*
  circle.addEventListener("webkitAnimationEnd", () => {
    circle.style.height = endPoint;
    console.log("End: " + circle.style.height);
  });
  */
};

const animateOnFrequency = (data, id) => {
  let circle = document.getElementById(id);
  removeExistingAnimationClasses(circle);
  void circle.offsetWidth;
  addAnimationClass(data, circle);
};

const setStylingForElement = newDiv => {
  newDiv.style.height = "0px";
  newDiv.style.width = "100px";
  newDiv.style.borderRadius = "25px";
  newDiv.style.border = "1px solid";
  newDiv.style.backgroundColor = "red";
};

let previousFrequencyLength = 0;
const removeUnusedFrequncies = (frequencyLength, frequencyBaseName) => {
  if (previousFrequencyLength > frequencyLength) {
    for (let i = frequencyLength; i < previousFrequencyLength; i++) {
      document.getElementById("main").removeChild(document.getElementById(frequencyBaseName + i));
    }
  }
  previousFrequencyLength = frequencyLength;
}

const createFrequencyElements = frequencyLength => {
  removeUnusedFrequncies(frequencyLength, "Frequency");
  for (let i = 0; i < frequencyLength; i++) {
    let div;
    if (!document.getElementById("Frequency" + i)) {
      div = document.createElement("div");
      div.setAttribute("id", "Frequency" + i);
      setStylingForElement(div);
    } else {
      div = document.getElementById("Frequency" + i);
    }
    document.getElementById("main").appendChild(div);
  }
};

module.exports = {
  createFrequencyElements,
  animateOnFrequency
}