# backend-api
Prueba tecnica
prueba técnica para un desarrollador de backend con enfoque en JavaScript (Node.js):

---

### Prueba Técnica para Desarrollador Backend JavaScript (Node.js)

#### Objetivo:
Evaluar las habilidades de desarrollo backend en JavaScript con Node.js, incluyendo la implementación de APIs REST, gestión de bases de datos, manejo de autenticación y autorización, así como buenas prácticas en la escritura de código.

### Instrucciones Generales:
1. Crea un repositorio privado en GitHub y comparte el acceso con el evaluador.
2. Realiza commits regulares para mostrar el progreso del desarrollo.
3. Escribe un archivo README.md en el que expliques cómo ejecutar el proyecto, las decisiones técnicas tomadas y cualquier otra información relevante.
4. Debes utilizar Node.js y Express para la implementación de la API.
5. Usa una base de datos NoSQL (MongoDB) o SQL (PostgreSQL) según prefieras.
6. Implementa pruebas unitarias y/o de integración usando una herramienta como Mocha, Chai o Jest.
7. Aplica principios de desarrollo seguro (validación de entradas, sanitización, manejo de errores).
8. Se valorará el uso de TypeScript, pero no es obligatorio.

### Requisitos del Proyecto:

#### 1. *Implementación de una API RESTful*
   - Desarrolla una API para gestionar una pequeña aplicación de gestión de tareas.
   - La API debe permitir realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los siguientes recursos:
     - *Usuarios*: (Nombre, Correo electrónico, Contraseña).
     - *Tareas*: (Título, Descripción, Estado, Fecha de creación, Fecha de vencimiento, Usuario asignado).
   - La API debe seguir las convenciones REST y manejar las respuestas HTTP adecuadamente.

#### 2. *Autenticación y Autorización*
   - Implementa un sistema de autenticación mediante tokens JWT (JSON Web Tokens).
   - Los usuarios deben poder registrarse e iniciar sesión en la aplicación.
   - Solo los usuarios autenticados deben poder crear, leer, actualizar o eliminar sus tareas.
   - Debe haber roles de usuario, por ejemplo, "usuario" y "administrador". Los administradores pueden ver y gestionar tareas de todos los usuarios, mientras que los usuarios regulares solo pueden gestionar sus propias tareas.

#### 3. *Gestión de Errores y Validaciones*
   - Maneja errores y excepciones de manera apropiada, proporcionando respuestas claras y útiles.
   - Implementa validaciones en el lado del servidor para asegurar que los datos recibidos sean correctos (por ejemplo, el correo electrónico debe ser válido, las contraseñas deben cumplir ciertos criterios de seguridad).

#### 4. *Persistencia de Datos*
   - Usa una base de datos para almacenar la información de los usuarios y tareas.
   - Proporciona scripts de migración o seeds para poblar la base de datos con datos de prueba.

#### 5. *Documentación de la API*
   - Documenta la API utilizando herramientas como Swagger o API Blueprint.
   - La documentación debe estar disponible en una ruta pública dentro de la aplicación (por ejemplo, /api-docs).

#### 6. *Pruebas*
   - Implementa pruebas unitarias para los controladores y/o servicios principales.
   - Implementa al menos un caso de prueba de integración para verificar el flujo completo de un caso de uso.

### Entrega
- Al finalizar, proporciona el enlace al repositorio de GitHub.
- Asegúrate de que todas las instrucciones para ejecutar y probar la aplicación estén claramente indicadas en el README.md.

---

Esta prueba está diseñada para evaluar tanto el conocimiento técnico como la capacidad para aplicar buenas prácticas de desarrollo en un entorno de producción.