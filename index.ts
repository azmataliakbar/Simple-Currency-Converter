#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

function rainbowText(text: any) {
  const rainbowColors = [
      chalk.red.bold.italic,
      chalk.yellow.bold.italic,
      chalk.green.bold.italic,
      chalk.blue.bold.italic,
      chalk.magenta.bold.italic,
      chalk.cyan.bold.italic
  ];

  let coloredText = '';
  for (let i = 0; i < text.length; i++) {
      const color = rainbowColors[i % rainbowColors.length];
      coloredText += color(text[i]);
  }
  return coloredText;
}

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();

console.log(rainbowText(`\nDate: ${currentDate} & Time: ${currentTime}`));
console.log();

console.log(chalk.rgb(191, 0, 255).italic.bold.underline("\nNote: 🌟 International currency rate are followed for the date 06-04-2024 🌟\n"));

console.log(chalk.yellowBright.italic.bold.underline("\n🟠🟢🔵  Welcome to My Currency Convertor 🔵🟢🟠\n"));

const currency: any = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.30,
  MYR: 4.75,
  PKR: 277.54,
  SAR: 3.75,
  AED: 3.67
}

let user_answer = await inquirer.prompt(
  [
    {
      name: "from",
      message: chalk.italic.bold.underline.rgb(255, 56, 0)("Enter the currency you're converting from:"),
      type: "list",
      choices: ["USD", "EUR", "GBP", "INR", "MYR", "PKR", "SAR", "AED"]
    },
    {
      name: "to",
      message: chalk.italic.bold.underline.rgb(57, 255, 20)("Enter the currency you want to convert to:"),
      type: "list",
      choices: ["USD", "EUR", "GBP", "INR", "MYR", "PKR", "SAR", "AED"]
    },
    {
      name: "amount",
      message: chalk.italic.bold.underline.rgb(0, 191, 255)("Enter Amount"),
      type: "number"
    }

  ]
)

//console.log(user_answer);




// to show dynamically object value
let fromAmmount = currency[user_answer.from]; // exchange rate
let toAmmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmmount // USD base currency
let convertedAmount = (baseAmount * toAmmount).toFixed(2)

console.log("\n",);

console.log(chalk.italic.bold.underline.rgb(250, 245, 245)("Base value $1 = the rate of currency you're converting from :", fromAmmount));
console.log(chalk.italic.bold.underline.rgb(250, 245, 245)("Base value $1 = the rate of currency you want to convert to:", toAmmount));
console.log(chalk.italic.bold.underline.rgb(250, 245, 245)("Your asked the amount to convert :", amount));

console.log("\n",);

console.log(chalk.yellowBright.italic.bold.underline("You will get amount:", convertedAmount));

console.log(chalk.italic.bold.underline.rgb(255, 111, 255)("\nThank You for using:\nMy Currency Converter\nSee you soon\nAuthor: Azmat Ali"));



