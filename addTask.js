const readline = require("readline");
const taskUtils = require("./taskUtils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function addTask(tasks) {
  const description = await new Promise((resolve) => {
    rl.question("Descripción: ", (description) => {
      resolve(description);
    });
  });

  const task = taskUtils.createTask(description);
  tasks.push(task);
  console.log("Tarea añadida.");
}

module.exports = addTask;
