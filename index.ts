import { cpus } from 'os'; // Import ES6 style
import chalk from "chalk";

const answer = JSON.stringify(cpus());

console.log(chalk.red(answer))