const fetchData = require("./api");
const outputTask = require("./taskOutput")

/**
 * 
 * @param {string} value - The input value to check. Typically expected to be a string.
 * @returns {boolean} - Returns `true` if the value is a non-empty string that can be
 *                      successfully converted to a number, otherwise `false`.
 */
function isNumber(value) {
      return !isNaN(Number(value)) && value.length > 0;
}

/**
 * Executes the main logic of the CLI program.
 *
 * This asynchronous function reads command-line arguments, validates the input,
 * and if the input is a valid number, fetches data from the JSONPlaceholder API
 * using that number as a resource ID. The fetched data is then printed to the console.
 *
 * - If no arguments are provided, the program prompts the user and exits.
 * - If the first argument is not a number, a warning is printed.
 *
 * @async
 * @function runProgram
 * @returns {Promise<void>} - This function does not return a value but performs
 *                             side effects such as logging output.
 */
async function runProgram(){
      const args = process.argv.slice(2);
      if (args.length === 0 || args.length > 1){
            console.log("Run program with a single numerical argument/\nUSAGE: node .\\main.js <number>");
            process.exit(0);
      }
      if (isNumber(args[0])){
            const response = await fetchData(`https://jsonplaceholder.typicode.com/todos/${args[0]}`)

            outputTask(response)
      }
      else{
            console.log("You must enter a number")
      } 
}
runProgram()
module.exports = isNumber, runProgram;
