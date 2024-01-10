// alert('connected')

let userData = document.getElementById("userData");
let chances = 0; // Initialize chances to 0
let score = 10;
let userHealth; // This variable is declared but not used, consider removing if unnecessary
let number = Math.floor(Math.random() * 100 + 1);
let hintText = document.getElementById("getHint");
let errorText = document.getElementById("errorText");
let scoreInput = parseInt(score) || 0; // Parse score directly, no need for .value
let chancesInput = parseInt(chances) || 0; // Parse chances directly, no need for .value
let resultUser = document.getElementById("resultUser");
console.log(number);

function get() {
  const userScore = scoreInput - chancesInput;
  // const su = parseInt(userScore.value); // No need to parse userScore again
  let errorMessage = "";
  switch (true) {
    case number == userData.value:
      errorMessage += `🎉 Your score is ${userScore}. Great job! You guessed right! 🎉`;
      break;
    case userData.value == 0:
      errorMessage += "⚠️ Input is 0. Try between 1 to 100.";
      chancesInput++;
      break;
    case userData.value >= 101:
      errorMessage += "😓 Try to guess Between 1 to 100 not more than That.";
      chancesInput++;
      break;
    case number > userData.value:
      errorMessage += "🔼 Try to guess a higher number or ask for a hint.";
      chancesInput++;
      break;
    case number < userData.value:
      errorMessage += "🔽 Try to guess a lower number or ask for a hint.";
      chancesInput++;
      break;
    default:
      errorMessage += "❌ Invalid input. Please try again.";
  }
  // return userData = ""

  errorText.innerHTML = errorMessage;
}

function hint() {
  let hintMsg = "";
  switch (true) {
    case number % 2 === 0 || number % 3 === 0:
      hintMsg += "🔍 The number is divisible by 2 or 3. Keep going!";
      break;
    case number > 10 && number < 50:
      hintMsg +=
        "🌟 The number is between 10 and 50 and not divisible by 2 or 3. You're on the right track!";
      break;
    case number > 50 && number < 100:
      hintMsg +=
        "💡 The number is between 50 and 100 and not divisible by 2 or 3. Getting closer!";
      break;
    case Math.sqrt(number) % 1 === 0:
      hintMsg += `🎯 The number is a perfect square!`;
      break;
    case Number.isInteger(Math.sqrt(number)):
      hintMsg += `🎯 The number is a perfect square!`;
      break;
    case Number.isInteger(Math.pow(number, 0.5)):
      hintMsg += `🎯 The number is a perfect square!`;
      break;
    case Math.pow(number, 0.5) % 1 === 0:
      hintMsg += `🎯 The number is a perfect square!`;
      break;
    default:
      hintMsg += "🤔 No hint available. You got this!";
  }

  hintText.innerHTML = hintMsg;
}
