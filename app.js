const http = require("http");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask() {
  return new Promise((resolve) => {
    rl.question("Indicador: ", (indicador) => {
      rl.question("Descripción: ", (descripcion) => {
        tasks.push({ id: tasks.length + 1, descripcion, completada: false });
        console.log("Tarea añadida.");
        resolve();
      });
    });
  });
}

function deleteTask() {
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

function completeTask() {
  return new Promise((resolve) => {
    rl.question("Índice de la tarea completada: ", (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].completada = true;
        console.log("Tarea completada.");
      } else {
        console.log("Índice inválido.");
      }
      resolve();
    });
  });
}

async function showTasks() {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    console.log(
      `${index}: [${task.completada ? "X" : " "}] ${task.id} - ${
        task.descripcion
      }`
    );
  });
}

async function showMenu() {
  console.log("\n1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Mostrar tareas");
  console.log("5. Salir");

  const option = await new Promise((resolve) => {
    rl.question("Selecciona una opción: ", (response) => {
      resolve(response);
    });
  });

  switch (option) {
    case "1":
      await addTask();
      break;
    case "2":
      await deleteTask();
      break;
    case "3":
      await completeTask();
      break;
    case "4":
      showTasks();
      break;
    case "5":
      rl.close();
      break;
    default:
      console.log("Opción inválida.");
  }

  await showMenu();
}

console.log("Bienvenido a la lista de tareas.");
showMenu();

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/tasks" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//http://localhost:8080/tasks
