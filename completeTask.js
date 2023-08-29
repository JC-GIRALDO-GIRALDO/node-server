module.exports = function completeTask(tasks, rl) {
  return new Promise((resolve) => {
    setTimeout(() => {
      rl.question("Índice de la tarea completada: ", (index) => {
        if (index >= 0 && index < tasks.length) {
          tasks[index].completada = true;
          console.log("Tarea completada.");
        } else {
          console.log("Índice inválido.");
        }
        resolve();
      });
    }, 3000);
  });
};
