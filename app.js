// element selectors
const btn = document.querySelector(".btn-submit");
const dia1 = document.querySelector("#dia-1");
const dia2 = document.querySelector("#dia-2");
const dia3 = document.querySelector("#dia-3");
const dist = document.querySelector("#distance");
const answer = document.querySelector("#answer");

// Event Functions

const calcFunc = () => {
  const w1 = Number(dia1.value);
  const w2 = Number(dia2.value);
  const w3 = Number(dia3.value);
  const initialDist = Number(dist.value);

  console.log(`value of distance is: ${initialDist}`);

  const numerator = w1 ** 2 - 2 * w2 ** 2 + w3 ** 2;

  console.log(`value of numerator is: ${numerator}`);

  const secondValue = numerator / 2;

  console.log(`value of second value is: ${secondValue}`);

  const rootValue = secondValue ** 0.5;

  console.log(`value of rootValue is: ${rootValue}`);

  const answerValue = rootValue / initialDist;

  console.log(`value of answer value is: ${answerValue}`);

  answer.innerText = String(answerValue);
};

// Event Handlers
btn.addEventListener("click", calcFunc);
