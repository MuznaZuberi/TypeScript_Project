import inquirer from "inquirer";
import chalk from "chalk";
//Addition 
let mathematical_ans = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Please enter your first number?",
});
let mathematical_answer = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Please enter your second number?",
});
let result = mathematical_ans.num1 + mathematical_answer.num2;
console.log(chalk.green("The Answer Is :", result));
//Multiplication
let another_mathematical_ans = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Please enter your first number?",
});
let another_mathematical_answer = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Please enter your second number?",
});
let another_result = another_mathematical_ans.num1 * another_mathematical_answer.num2;
console.log(chalk.green("The Answer Is :", another_result));
