const messages = [
    "¡Q'hubo!",
    "¿Qué más pues?",
    "¿ Qué me cuentas?",
    "¿Cómo va todo?",
    "¿Cómo estuvo tu día?",
    "Bien...o qué?",
    "Bien...o no?",
    "¿Qué tal?",
    "Ajá...y tú qué?",
    "Que se dice compadre!"
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };