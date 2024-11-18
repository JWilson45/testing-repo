// SillyScript.js
const fs = require('fs');

function generateRandomQuote() {
    const quotes = [
        "Believe in yourself, even when the code doesn't.",
        "Every bug is a feature waiting to be discovered.",
        "You miss 100% of the shots you don’t take… unless you have auto-aim.",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "Simplicity is the soul of efficiency."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function generateFibonacci(n = 10) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function randomSandwich() {
    const breads = ["sourdough", "whole wheat", "rye", "bagel"];
    const proteins = ["turkey", "ham", "tofu", "tuna", "chicken"];
    const veggies = ["lettuce", "tomato", "cucumber", "spinach", "pickles"];
    const sauces = ["mayo", "mustard", "hummus", "sriracha"];

    return {
        bread: breads[Math.floor(Math.random() * breads.length)],
        protein: proteins[Math.floor(Math.random() * proteins.length)],
        veggie: veggies[Math.floor(Math.random() * veggies.length)],
        sauce: sauces[Math.floor(Math.random() * sauces.length)]
    };
}

function randomUsefulOutput() {
    const choices = [generateRandomQuote, generateFibonacci, randomSandwich];
    const randomFunction = choices[Math.floor(Math.random() * choices.length)];
    const result = randomFunction();

    console.log("\n🔮 Your Randomly Generated Useful Thing:\n", result);
}

// Save output to file because why not!
function saveOutputToFile(output) {
    const filename = `randomOutput_${Date.now()}.txt`;
    fs.writeFileSync(filename, `Random Output:\n${JSON.stringify(output, null, 2)}`, 'utf8');
    console.log(`✨ Saved to ${filename}`);
}

// Run it
const output = randomUsefulOutput();
saveOutputToFile(output);
