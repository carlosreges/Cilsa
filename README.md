# Formulario de Datos Personales con Estilos Personalizados y Validación de Email

Este proyecto consiste en la creación de un formulario web que permite a los usuarios ingresar sus datos personales, tales como nombre, apellido, email, fecha de nacimiento y país de residencia. Además de los aspectos básicos del formulario, se han implementado características avanzadas como la validación del email mediante JavaScript y la posibilidad de alternar entre un estilo estándar y uno de alto contraste para mejorar la accesibilidad.

## Estructura del Proyecto

- **HTML**: Se ha diseñado un formulario simple y accesible utilizando elementos estándar de HTML5, asegurando que cada campo esté correctamente etiquetado y sea obligatorio (`required`), según corresponda.
  
- **CSS**: 
  - `styles.css`: Este archivo contiene el estilo estándar del formulario, que es limpio, moderno y fácil de usar.
  - `high-contrast.css`: Este archivo ofrece un estilo de alto contraste, diseñado para usuarios con dificultades visuales, garantizando así una experiencia accesible para todos.

- **JavaScript**:
  - **Validación del Email**: Se ha implementado una validación de email en `script.js`, utilizando expresiones regulares para asegurar que el formato del correo electrónico ingresado sea válido. En caso de que el formato no sea correcto, se informa al usuario mediante un mensaje de error.
  - **Alternancia de Estilo**: El archivo `script.js` también permite al usuario alternar entre los estilos estándar y de alto contraste. Esto se logra cambiando dinámicamente el archivo CSS que se carga, dependiendo de la elección del usuario.

## ¿Qué he aprendido?

Al realizar este proyecto, he desarrollado y consolidado varias habilidades clave:

1. **Estructuración y Maquetación de Formularios en HTML**: He reforzado mi comprensión sobre cómo crear formularios estructurados en HTML, asegurando que cada campo esté correctamente etiquetado y sea accesible para todos los usuarios.

2. **Estilización Avanzada con CSS**: He aprendido a diseñar y aplicar diferentes estilos visuales a un formulario web, incluyendo un diseño estándar y uno de alto contraste para mejorar la accesibilidad. Además, he comprendido la importancia de separar los estilos en archivos CSS diferentes para mantener un código organizado y modular.

3. **Validación de Formularios con JavaScript**: He implementado y perfeccionado la validación del formato de email utilizando JavaScript. Esto me ha permitido entender mejor cómo interactuar con los formularios a nivel de cliente y cómo proporcionar una retroalimentación inmediata al usuario.

4. **Accesibilidad Web**: He profundizado en la importancia de la accesibilidad en el desarrollo web, particularmente en cómo diseñar interfaces que sean utilizables para personas con discapacidades visuales. El estilo de alto contraste es un ejemplo práctico de cómo se puede mejorar la accesibilidad de una aplicación web.

5. **Interactividad Dinámica con JavaScript**: He aprendido a alternar dinámicamente entre diferentes estilos CSS utilizando JavaScript, lo que me ha permitido crear una experiencia de usuario más rica y personalizada.

## Ejecución del Proyecto

Para ver el proyecto en funcionamiento, simplemente abre el archivo `index.html` en tu navegador preferido. Puedes alternar entre el estilo estándar y el de alto contraste utilizando el botón "Alto Contraste". Además, asegúrate de probar la validación del campo de email para ver cómo se maneja la entrada incorrecta.

Este proyecto ha sido una excelente oportunidad para consolidar conocimientos clave en HTML, CSS y JavaScript, así como para aplicar principios de accesibilidad y buenas prácticas de desarrollo web.

