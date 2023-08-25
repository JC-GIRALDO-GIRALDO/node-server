const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

  return option;
}

module.exports = {
  showMenu,
};
