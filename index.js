function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }
  
  const thankYouMessages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  console.log(thankYouMessages);
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  countDown(10); // This will log numbers from 10 down to 0
  