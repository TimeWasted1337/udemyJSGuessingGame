let maximum = parseInt(prompt("Enter the MAXIMUM number."));
while (!maximum) {
    maximum = parseInt(prompt("Enter a Valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess."));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    if (guess > targetNum) {
        guess = prompt("Too High, Try again.")
    } else {
        guess = prompt("Too Low, Try again.")
    }
}
if (guess === 'q') {
    console.log("Awww, Don't quit on me!")
} else {
    console.log("You Did It!!")
    console.log(`You Got it in ${attempts} guess(es)`)
}