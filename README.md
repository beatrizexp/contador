# Contador - README

## Descripción
Una aplicación simple de contador creada con React que incluye las siguientes funcionalidades:

- Incrementar el contador.
- Decrementar el contador.
- Reiniciar el contador.
- Límite opcional para no bajar de 0 y no exceder el valor máximo de 10.
- Un mensaje que aparece cuando se alcanza el valor máximo.

El diseño es moderno y está optimizado para un fondo oscuro.

---

## Cómo levantar la aplicación

### Prerrequisitos
- Tener Node.js instalado (versión 14 o superior).
- Tener instalado un gestor de paquetes, en este caso `npm`.

### Pasos para ejecutar

1. Clonar este repositorio:
   ```bash
   git clone [https://github.com/beatrizexp/contador.git]
   ```

2. Navegar al directorio del proyecto:
   ```bash
   cd contador
   ```

3. Instalar las dependencias:
   ```bash
   npm install
   

4. Levantar la aplicación:
   ```bash
   npm start
  

5. Abre tu navegador y visita `http://localhost:3000`.

---

## Criterios cumplidos

1. **Manejo del estado:**
   - Utilizamos el hook `useState` para gestionar el valor actual del contador.

2. **Manejo de eventos en botones:**
   - Los botones de incrementar, decrementar y reiniciar manejan eventos de clic con funciones claras y separadas.

3. **Lógica simple y clara para los límites:**
   - El contador no puede bajar de 0 ni exceder el valor máximo de 10.
   - Se muestra un mensaje informativo cuando se alcanza el valor máximo.

4. **Código legible, limpio y funcional:**
   - Uso de estilos en línea organizados en un objeto `styles`.
   - Las funciones están claramente separadas y comentadas.

---

## Mejoras posibles

1. **Internacionalización:**
   - Incluir soporte para diferentes idiomas para el mensaje y los botones.

2. **Estilos dinámicos:**
   - Añadir efectos de hover y active a los botones para mejorar la experiencia del usuario.

3. **Responsive Design:**
   - Asegurarse de que el diseño funcione bien en dispositivos móviles más pequeños.

4. **Extensión de funcionalidades:**
   - Agregar la posibilidad de que el usuario defina el valor máximo.
   - Incorporar un historial de valores previos del contador.

---

## Autora Beatriz Expósito Fernandez
Este proyecto fue desarrollado como parte de una prueba técnica para la empresa Ibermática. Si tienes comentarios o preguntas, no dudes en contactarme.

¡Gracias por revisar este proyecto! 

