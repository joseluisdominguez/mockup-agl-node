# Requisitos.
* Node v10.14.2

# Instrucciones
* Clonar repositorio
* npm install
* node server.js

# Introducción
Este proyecto de Node está en na versión simple en la que la no vamos a usar una BD, las respuestas a los servicios están mockeadas.

Hay un endpoint ya existente que se invoca llamando a la URL
localhost:400/v1/test

# Ejercicio 1.
Examinar el proyecto, se distinguen 4 capas en el proyecto (Routes, Controllers, Services y Repositories). Decir para qué se usa cada una de estas capas y comentar en qué capa se haría consultas a la BD para extraer datos y el por qué.

# Ejercicio 2.
Ahora supón que debemos de usar una API para extraer cierta información, en qué capa lo harías y por qué.

# Ejercicio 3.
Qué sentido puede tener usar el prefijo /v1/ en los endpoints de nuestra API?

# Ejercicio 4.
Crea un nuevo enpoint en testRoutes de tipo GET donde se reciba un parámetro en la URL. Este endpoint, debe de conectar con la API https://jsonplaceholder.typicode.com/todos/1 donde el último número de esta API, sea el parámetro de tu nuevo servicio.

# Ejercicio 5.
Explica o implementa un servicio de login, al no usar BD, los datos lo debes de mockear. Haz o explica cómo protegerías los endpoints que ya existen para que solo lo puedan llamar usuarios con sesión. Explica también la estrategia que vas a seguir para mantener la sessión de los usuarios.

Nota: Tienes total libertad para usar y explicar lo que quieras, cuánta más información nos des mejor. La solución a las preguntas teóricas, puedes crear un .txt y mandarlo por email. La parte práctica, pedimos que esté documentada para poder seguir correctamente el código realizado.

Nota 2: Esta prueba esta hecha para no excederse de unas 3 horas, no obstante, si se necesita más tiempo no hay problema.

Nota 3: Esta prueba es sobretodo para conocer qué sabes sobre APIs Rest y el uso de buenas prácticas, no tengas ninguna presión. Suerte