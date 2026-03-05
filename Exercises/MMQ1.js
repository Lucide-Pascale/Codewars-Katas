function displayNumber() {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count);
    count++;
  }, 2000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

displayNumber();
