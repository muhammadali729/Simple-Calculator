import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number:", type: "number", name: "Firstnumber" },
    { message: "Enter Second Number:", type: "number", name: "Secondnumber" },
    {
        message: "Select one of the operator to perform task",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
