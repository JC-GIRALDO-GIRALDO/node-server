const readline = require("readline");
const taskUtils = require("./taskUtils");
const menu = require("./menu");
const server = require("./server");
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

async function completeTask() {
  const indexStr = await new Promise((resolve) => {
    rl.question("Índice de la tarea completada: ", (index) => {
      resolve(index.trim());
    });
  });

  const index = parseInt(indexStr, 10);

  if (!isNaN(index)) {
    taskUtils.completeTask(tasks, index);
  } else {
    console.log("Índice inválido.");
  }
}

async function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    console.log(
      `${index}: [${task.completed ? "X" : " "}] ${task.id} - ${
        task.description
      }`
    );
  });
}

async function app() {
  console.log("Bienvenido a la lista de tareas.");

  while (true) {
    const option = await menu.showMenu();

    switch (option) {
      case "1":
        await addTask(tasks);
        break;
      case "2":
        await deleteTask(tasks);
        break;
      case "3":
        await completeTask();
        break;
      case "4":
        await showTasks();
        break;
      case "5":
        rl.close();
        process.exit();
      default:
        console.log("Opción inválida.");
    }
  }
}

const port = 8080;

server.startServer(port, (req, res) => {
  const url = req.url;
  if (url === "/tasks" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

app();

//http://localhost:8080/tasks
