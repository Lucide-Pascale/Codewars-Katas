async function getPost(url, retry = 3) {
  try {
    console.log("Trying fetch. Retries left:", retry);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    return await res.json();

  } catch (err) {
    if (retry > 0) {
      console.log("Retrying again...");
      // Small delay so you can SEE retries clearly
      await new Promise(r => setTimeout(r, 500));
      return getPost(url, retry - 1);
    } else {
      console.log("No retries left.");
      throw err;
    }
  }
}

getPost("https://jsonplaceholder.typicode.com/invalid-url", 3)
  .then(data => console.log(data))
  .catch(err => console.log("Message error: " + err.message));
