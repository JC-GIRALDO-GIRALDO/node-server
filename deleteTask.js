const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function deleteTask(tasks) {
  return new Promise((resolve) => {
    rl.question("Índice de la tarea a eliminar: ", (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log("Tarea eliminada.");
      } else {
        console.log("Índice inválido.");
      }
      resolve();
    });
  });
}

module.exports = deleteTask;
