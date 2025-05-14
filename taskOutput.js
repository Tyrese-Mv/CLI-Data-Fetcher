function outputTask(obj){
    console.log("\n")
    console.log(`Task: ${obj.title}`);
    console.log(`Is Complete?: ${(obj.completed) ? "Yes" : "No"}`)
    console.log("\n")
}

module.exports = outputTask