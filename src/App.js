import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Estado inicial del contador
  const maxCount = 10; // Valor máximo del contador

  // Función para incrementar
  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  // Función para decrementar
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Función para reiniciar
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contador</h1>
      <h2 style={styles.count}>{count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.incrementButton}>
          Incrementar
        </button>
        <button onClick={decrement} style={styles.decrementButton}>
          Decrementar
        </button>
        <button onClick={reset} style={styles.resetButton}>
          Reiniciar
        </button>
      </div>
      
      {count === maxCount && (
        <p style={styles.maxMessage}>
          ¡Has alcanzado el valor máximo de {maxCount}!
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: "'Poppins', sans-serif", // Tipografía moderna
    backgroundColor: '#2c3e50', // Fondo oscuro
    padding: '40px 20px',
    borderRadius: '16px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)', // Sombra más profunda para resaltar el contenedor
    width: '350px', // Más espacio para un aspecto más equilibrado
    margin: 'auto',
  },
  header: {
    color: '#ecf0f1', // Blanco suave para el título
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: '600',
  },
  count: {
    fontSize: '64px', // Tamaño grande y audaz para el número
    fontWeight: '700', // Negrita fuerte para el número
    color: '#ecf0f1', // Blanco suave para el número
    marginBottom: '30px',
    letterSpacing: '2px', // Espaciado para un toque de estilo
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  incrementButton: {
    backgroundColor: '#3498db', // Azul claro para incrementar
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px', // Bordes redondeados con más radio para un toque suave
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
    fontWeight: '600',
  },
  decrementButton: {
    backgroundColor: '#2ecc71', // Verde suave para decrementar
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px', // Bordes redondeados
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#e74c3c', // Rojo brillante para el botón de reiniciar
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
    fontWeight: '600',
  },
  maxMessage: {
    color: '#ecf0f1', // Mensaje en blanco suave para contraste
    fontWeight: '600',
    marginTop: '25px',
    fontSize: '18px',
  },
};

export default Counter;
