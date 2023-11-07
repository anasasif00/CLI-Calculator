#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('lets start command line calculator');
    await sleep();
    rainbowTitle.replace('with Node.JS,INQUIRER and CHALK');
    await sleep();
    rainbowTitle.replace('Now start your calculation!!!');
    await sleep();
    rainbowTitle.stop();
    let pulseTitle = chalkAnimation.pulse('Developed by SHAIKH ANAS.');
    await sleep();
    pulseTitle.stop();
    let neonTitle = chalkAnimation.neon(`
    
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________| `);
    await sleep();
    neonTitle.stop();
    startLoop();
}
async function askQuestion() {
    let ans = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which Operation You Want To Perform?",
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Your First Number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Your Second Number"
        }
    ]);
    if (ans.operator == "+ Addition") {
        console.log(chalk.bgBlue.italic.bold(` ${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
    }
    if (ans.operator == "- Subtraction") {
        console.log(chalk.bgBlue.italic.bold(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
    }
    if (ans.operator == "* Multiplication") {
        console.log(chalk.bgYellow.italic.bold(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));
    }
    if (ans.operator == "/ Division") {
        console.log(chalk.bgRed.italic.bold(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
    }
}
;
// askQuestion();
async function startLoop() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue Press y or n ?",
        });
    } while (again.restart == 'y' || again.restart == 'yes' || again.restart == 'Y' || again.restart == 'YES');
}
;
welcome();
