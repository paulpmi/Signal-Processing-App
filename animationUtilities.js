const removeExistingAnimationClasses = circle => {
  if (circle.classList.contains("Class"+circle.className)) circle.classList.remove("Class"+circle.className);
};

const addAnimationClass = (newFrequency, circle) => {
  let style = document.documentElement.style;
  console.log("START POINT: " + circle.style.height);
  
  const endPoint = newFrequency + 'px';
  console.log("END POINT: ", endPoint);
  style.setProperty('--startLocation', circle.style.height);
  style.setProperty('--endLocation', endPoint);
  console.log("Class NAME: " + 
    circle.getAttribute("id")
  );
  circle.classList.add(createKeyFrames(circle.getAttribute("id"), circle.style.height, endPoint));

  /*
  circle.addEventListener("webkitAnimationEnd", () => {
    circle.style.height = endPoint;
    console.log("End: " + circle.style.height);
  });*/
};

const createKeyFrames = (name, from, to) => {
  let style = document.createElement('style'),
    addKeyFrames = null;

  document.head.appendChild(style);
  console.log("Animation: " + name);
  const pos = style.length;
  style.innerHTML = '.Class' + name + '{ animation-name: Animation' + name + 'animation-duration: 1s; }';
  style.sheet.insertRule(
    "@keyframes Animation" + name + "{ from {height: " + from + ";}" + "to: {height: " + to + ";}}", pos);
  return '.Class' + name;
}

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
      setStylingForElement(div);
    }
    else{
      div = document.getElementById("Frequency" + i);
    }
    document.getElementById("main").appendChild(div);
  }
};

module.exports = {createFrequencyElements, animateOnFrequency}