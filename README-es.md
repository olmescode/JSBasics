# JavaScript

JavaScript es un lenguaje de programación versátil, de alto nivel e interpretado utilizado principalmente para el desarrollo web del lado del cliente. Permite funciones interactivas y dinámicas en sitios web, haciéndolos más atractivos para los usuarios. Desarrollado a mediados de los años 90, JavaScript se ha convertido en una tecnología clave para construir aplicaciones web modernas.

### Variables y Operaciones

- ¿Qué es una variable y para qué sirve?

Las variables son espacios de memoria donde podemos almacenar información, dependiendo de los tipos y estructuras de datos admitidos por nuestro lenguaje.

- Diferencia entre declarar e inicializar una variable?

Declarar es informar a JavaScript que estamos creando una variable con un nombre específico. Inicializar es asignar un valor a esa variable.

- Diferencia entre sumar números y concatenar cadenas?

El operador `+` nos permite sumar números y concatenar cadenas. Cuando se usa con números, los suma. Con cadenas, las une (concatena).

## Declaración y Asignación

Palabra resevada de una variable, dependiendo el caso puede ser:

- `var`
- `let`
- `const`

```javascript
var mi_variable = "Declarar variable"
```

Nombre de la variable: `var mi_variable`

Operador de asignacion: `=`

Dato asignado a la variable: `"Declarar variable"`

## Nomenclatura y Tipos de Datos:

**Número:**

JavaScript maneja tanto enteros como decimales como números.
```javascript
let edad = 40;
let temperatura = 25.5;
```

**Cadena (String):**

Las cadenas pueden contener desde un solo carácter hasta un párrafo completo.
```javascript
let nombre = "Luis";
let saludo = "¡Hola, mundo!";
```

**Booleano:**

Los booleanos son ideales para condiciones, como verificar si está soleado o lloviendo.
```javascript
let estaSoleado = true;
let estaLloviendo = false;
```

**Nulo (Null) y No Definido (Undefined)**

```javascript
let nada = null; // Puedes usar esto cuando quieres decir intencionalmente, "No hay nada aquí."
let noDefinido; // Si declaras una variable pero no le asignas un valor, es indefinido.
```

**Arreglo (Array):**

Los arreglos pueden almacenar múltiples valores, facilitando el trabajo con listas de elementos.
```javascript
let frutasFavoritas = ["Manzana", "Plátano", "Naranja"];
```

**Objeto (Object):**

Los objetos te ayudan a organizar datos con propiedades nombradas. Aquí tenemos una persona con un nombre, edad y estado de estudiante.
```javascript
let miObjeto = {
    nombre: "Luis",
    edad: 20,
    esEstudiante: true
};
 ```

**Funciones:**

Las funciones son un tipo de dato en JavaScript. Se pueden asignar a variables y pasarlas por tu código.
```javascript
let saludar = function() {
  console.log("¡Hola!");
};
```
**Fecha (Date):**

El tipo de dato Fecha se utiliza para trabajar con fechas y horas.
```javascript
let fechaActual = new Date();
```

**Expresión Regular (RegExp):**

Las expresiones regulares se utilizan para la coincidencia de patrones dentro de cadenas.
```javascript
let patron = /[a-zA-Z]+/;
```

#### Ejemplo: Código JavaScript para variables:

```javascript
let nombre = 'Juan Sultan';
let apellido = 'Galeas Zabala';
let nombreUsuario = 'juandc';
let edad = 19;
let correo = 'crespo@gmail.xyz';
let esMayorDeEdad = true;
let dineroGuardado = 1000;
let deudas = 100;
```

#### Ejemplo: Cálculos:

```javascript
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroGuardado - deudas;
```

## Funciones

- ¿Qué es una función?

Una función es como una receta: un conjunto de instrucciones para realizar una tarea específica.

- ¿Cuándo es útil usar una función en mi código?

Usa funciones para evitar repetir código, hacerlo más legible y organizar tareas de manera lógica.

- Diferencia entre parámetros y argumentos de una función?

Los parámetros son marcadores de posición en la definición de una función, y los argumentos son los valores reales pasados al llamar a la función.

### Convertir código en una función:

```javascript
function presentarse(nombre, apellido, apodo) {
  let nombreCompleto = nombre + ' ' + apellido;
  console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me llames " + apodo + ".");
}
```

## Condicionales

- ¿Qué es una condicional?

Una condicional es una estructura de toma de decisiones en el código.

- Tipos de condicionales en JavaScript y diferencias?

En JavaScript, existen if, else if y else. Manejan diferentes condiciones de manera secuencial.

- ¿Puedo combinar funciones y condicionales?

Absolutamente, puedes usar funciones para encapsular tareas dentro de condicionales.

```javascript
const tipoDeSuscripcion = "Básica";

if (tipoDeSuscripcion === "Gratis") {
  console.log("Solo puedes tomar cursos gratuitos.");
} else if (tipoDeSuscripcion === "Básica") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
} else if (tipoDeSuscripcion === "Experto") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
} else if (tipoDeSuscripcion === "ExpertoPlus") {
  console.log("Tú y otra persona pueden tomar TODOS los cursos de Platzi durante un año.");
}
```

### Mejorar else y else if:

```javascript
/*
"tabla de búsqueda" o "diccionario".
Es esencialmente un mapeo entre claves (tipos de suscripción) y valores (mensajes asociados).

Este enfoque aprovecha las capacidades de recuperación basadas en claves de los objetos, proporcionando una manera más limpia y eficiente de gestionar múltiples condiciones.

Es una forma de "programación declarativa" en la que declaras lo que debería suceder para cada caso en lugar de programar explícitamente los pasos a seguir para cada caso (como lo harías con múltiples declaraciones if)
*/

// Objeto de información de suscripción
const informacionDeSuscripcion = {
  Gratis: "Solo puedes tomar cursos gratuitos.",
  Básica: "Puedes tomar casi todos los cursos de Platzi durante un mes.",
  Experto: "Puedes tomar casi todos los cursos de Platzi durante un año.",
  ExpertoPlus: "Tú y otra persona pueden tomar TODOS los cursos de Platzi durante un año."
};

// Función para verificar y mostrar la información de la suscripción
function verificarSuscripcion(tipoDeSuscripcion) {
  const mensaje = informacionDeSuscripcion[tipoDeSuscripcion];
  if (mensaje) {
    console.log(mensaje);
  } else {
    console.log("Tipo de suscripción no válido.");
  }
}

// Ejemplo de uso:
verificarSuscripcion("Gratis");
verificarSuscripcion("Básica");
verificarSuscripcion("Experto");
verificarSuscripcion("ExpertoPlus");
verificarSuscripcion("TipoInvalido");
```

## Bucles (Loops)

- ¿Qué es un bucle?

Un bucle es una forma de ejecutar repetidamente un bloque de código.

- Tipos de bucles en JavaScript?

Los bucles comunes son `for`, `while` y `do-while`.

- ¿Qué es un bucle infinito y por qué es un problema?

Un bucle infinito nunca se detiene, lo que provoca que el programa se ejecute indefinidamente, y a menudo conduce a bloqueos del sistema o de la aplicación.

- ¿Puedo combinar bucles y condicionales?

Absolutamente, combinar bucles y condicionales es común para lógica compleja.

### Convertir bucles `for` a `while`:

```javascript
// bucle for
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// bucle while
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let j = 10;
while (j >= 2) {
  console.log("El valor de j es: " + j);
  j--;
}
```

#### Ejemplo: Preguntar a los usuarios sobre 2 + 2 hasta que sea correcto:

```javascript
let respuestaUsuario;
do {
  respuestaUsuario = prompt("¿Cuánto es 2 + 2?");
} while (respuestaUsuario !== "4");

alert("¡Felicidades! Lo has acertado.");
```

## Listas

- ¿Qué es un array (arreglo)?

Un array es una estructura de datos que almacena una colección de elementos.

- ¿Qué es un objeto?

Un objeto es una colección de pares clave-valor, que a menudo representa entidades del mundo real.

- ¿Cuándo es mejor usar objetos o arrays?

Usa arrays para listas ordenadas de elementos similares; usa objetos para pares clave-valor que representan atributos de una entidad única.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Absolutamente, puedes tener arrays de objetos o objetos que contienen arrays.

#### Ejemplo: Función para imprimir el primer elemento de cualquier array:

```javascript
let miArray = [1, 2, 3, 4];

function imprimirPrimerElemento(arr) {
  console.log(arr[0]);
}

imprimirPrimerElemento(miArray);
```

#### Ejemplo: Función para imprimir todos los elementos de cualquier array:

```javascript
let otroArray = ['manzana', 'naranja', 'plátano'];

function imprimirTodosLosElementos(arr) {
  for (let elemento of arr) {
    console.log(elemento);
  }
}

imprimirTodosLosElementos(otroArray);
```

#### Ejemplo: Función para imprimir todos los elementos de cualquier objeto:

```javascript
function imprimirTodosLosElementosDelObjeto(obj) {
  for (let clave in obj) {
    console.log(obj[clave]);
  }
}

// Ejemplo de uso:
let miObjeto = { clave1: 'valor1', clave2: 'valor2', clave3: 'valor3' };
imprimirTodosLosElementosDelObjeto(miObjeto);
```

### Best Practices
- El nombre de la variable debe ser un nombre descriptivo que se identifique con el codigo
- Las variables no se pueden iniciar con numeros
- No se pueden usar caracteres especiales
- Los tipos de escritura de una variable son: lowerCamelCase, UpperCamelCase, snake_case
