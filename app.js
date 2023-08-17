const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask() {
  rl.question("Indicador: ", (indicador) => {
    rl.question("Descripción: ", (descripcion) => {
      tasks.push({ indicador, descripcion, completada: false });
      console.log("Tarea añadida.");
      showMenu();
    });
  });
}

function deleteTask() {
  rl.question("Índice de la tarea a eliminar: ", (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log("Tarea eliminada.");
    } else {
      console.log("Índice inválido.");
    }
    showMenu();
  });
}

function completeTask() {
  rl.question("Índice de la tarea completada: ", (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completada = true;
      console.log("Tarea completada.");
    } else {
      console.log("Índice inválido.");
    }
    showMenu();
  });
}

function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    console.log(
      `${index}: [${task.completada ? "X" : " "}] ${task.indicador} - ${
        task.descripcion
      }`
    );
  });
  showMenu();
}

function showMenu() {
  console.log("\n1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Mostrar tareas");
  console.log("5. Salir");

  rl.question("Selecciona una opción: ", (option) => {
    switch (option) {
      case "1":
        addTask();
        break;
      case "2":
        deleteTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        showTasks();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        showMenu();
    }
  });
}

console.log("Bienvenido a la lista de tareas.");
showMenu();
