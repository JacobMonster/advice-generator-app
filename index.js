const advicePlace = document.querySelector(".place-for-advice");
const placeForAdviceNumber = document.querySelector(".place-for-number");
const fetchAdvice = async () => {
  const adviceObj = await fetch("https://api.adviceslip.com/advice");
  const dataObj = await adviceObj.json();
  addTextContent(dataObj);
};

const addTextContent = (dataObj) => {
  advicePlace.innerHTML = dataObj.slip.advice;
  placeForAdviceNumber.innerHTML = "Advice #" + String(dataObj.slip.id).trim();
  console.log(dataObj);
};

const roll = document.querySelector(".roll");

const handleRollClick = async () => {
  if (roll.getAttribute("aria-disabled") === "true") return;
  try {
    roll.setAttribute("aria-disabled", true);
    await fetchAdvice();
    roll.setAttribute("aria-disabled", false);
  } catch (e) {
    console.error(e);
  }
};

roll.addEventListener("click", handleRollClick);

fetchAdvice();
