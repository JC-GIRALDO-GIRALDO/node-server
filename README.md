1)¿Qué sucedio al usar async y await?
async y await permiten trabajar con promesas de una manera más legible y ordenada.
Esto hace que el flujo de control sea más intuitivo.

2)¿Qué sucedio al usar el método then()?
Al usar el método .then(). Las funciones que retornan promesas, como addTask(), deleteTask() y completeTask(),
se encadenan con .then() para definir qué acciones deben tomarse después de que se resuelvan las promesas.
Se puede ver cómo cada una de estas funciones se ejecuta secuencialmente.

3)¿Qué diferencias encontraste entre async, await y el método then()?
async y await proporcionan una sintaxis más limpia y estructurada para trabajar con promesas mientras que
.then() proporciona un control detallado y explícito sobre el flujo de control de las promesas encadenando múltiples .then() para establecer un flujo de
control claro y detallado.
