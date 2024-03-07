import  inquirer from "inquirer"
import  chalk from "chalk"

let user_data = await inquirer.prompt([{
	name: "user_name",
	type: "string",
	message: "Please enter user_name?",
}]);

console.log(chalk.red(user_data.user_name));