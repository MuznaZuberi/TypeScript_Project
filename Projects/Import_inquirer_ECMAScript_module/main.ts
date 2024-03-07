import  inquirer from "inquirer"

let user_data = await inquirer.prompt([{
	name: "user_name",
	type: "string",
	message: "Please enter user_name?",
}]);

console.log(user_data.user_name);
