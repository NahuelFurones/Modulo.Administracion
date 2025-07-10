// Servidor básico con Express

/**
 * Este archivo crea un servidor HTTP usando Express.
 * - Sirve archivos estáticos (HTML, CSS, JS, imágenes) desde la carpeta 'public'.
 * - La ruta raíz '/' entrega el archivo principal SysAdmin.htm.
 * 
 * Esto te permite probar localmente el módulo SysAdmin con su estructura de carpetas.
 * 
 * Para ejecutarlo:
 *   1. Ejecutar "npm install" en la terminal para instalar dependencias.
 *   2. Ejecutar "npm start" en la terminal para iniciar el servidor.
 *   3. Abrir http://localhost:3000 en el navegador.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que envía a SysAdmin.htm
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SysAdmin.htm'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
