# Control de Seguridad

Aplicación web para gestionar vigiladores y sus tareas. Permite agregar, visualizar, completar y eliminar registros.

---

## Tecnologías

Frontend:

* React
* JavaScript
* CSS

Backend:

* Node.js
* Express

Base de datos:

* MongoDB (Mongoose)

---

## Estructura

```
control-seguridad/

backend/
  models/
    Usuario.js
  routes/
    usuarioRoutes.js
  server.js
  package.json
  .env

frontend/
  public/
  src/
    App.js
    App.css
    api.js
    index.js
  package.json

.gitignore
```

---

## Funcionalidad

* Agregar vigiladores (nombre, puesto, tarea)
* Listar vigiladores
* Marcar tareas como completadas
* Eliminar registros

---

## Endpoints

```
GET     /api/usuarios
POST    /api/usuarios
PUT     /api/usuarios/:id
DELETE  /api/usuarios/:id
```

---

## Uso

Clonar repositorio:

```
git clone https://github.com/ConejeroValentin/control-seguridad.git
```

### Backend

```
cd backend
npm install
```

Crear archivo .env:

```
MONGO_URI=tu_uri
PORT=5000
```

Ejecutar:

```
node server.js
```

### Frontend

```
cd frontend
npm install
npm start
```

---

## Acceso

Frontend: [http://localhost:3000](http://localhost:3000)
Backend: [http://localhost:5000/api/usuarios](http://localhost:5000/api/usuarios)

---

## Notas

* Proyecto dividido en frontend y backend
* Implementa operaciones CRUD
* Comunicación mediante fetch

---

## Autor

Valentin Lautaro Conejero Giura
