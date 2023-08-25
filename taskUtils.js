const { v4: uuidv4 } = require("uuid");

function createTask(description) {
  const id = uuidv4();
  return { id, description, completed: false };
}

function completeTask(tasks, index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log("Tarea completada.");
  } else {
    console.log("Índice inválido.");
  }
}

module.exports = {
  createTask,
  completeTask,
};
