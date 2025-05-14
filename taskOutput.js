/**
 * Outputs formatted task details to the console.
 *
 * @param {Object} obj - The task object to display.
 * @param {string} obj.title - The title or description of the task.
 * @param {boolean} obj.completed - Indicates whether the task is completed
 */
function outputTask(obj){
    console.log("\n")
    console.log(`Task: ${obj.title}`);
    console.log(`Is Complete?: ${(obj.completed) ? "Yes" : "No"}`)
    console.log("\n")
}

module.exports = outputTask