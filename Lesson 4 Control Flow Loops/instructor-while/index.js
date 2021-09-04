let isNetworkOn = false;

while (!isNetworkOn) {
  console.log("Network is down. Retry to connect...");

  // some code to connect network.

  const randomNumber = Math.floor(Math.random() * 10);
  console.log("randomNumber is", randomNumber);
  if (randomNumber > 5) {
    isNetworkOn = true;
  }
}
