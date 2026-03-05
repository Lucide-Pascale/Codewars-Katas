async function fetchWithTimeout(url, timeoutMs = 5000) {
  // 1. Create an instance of AbortController
  const controller = new AbortController();
  const { signal } = controller;

  // 2. Set a timer to trigger the abort
  const timer = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, { signal });
    
    // Clear the timer if the fetch succeeds before the timeout
    clearTimeout(timer);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // 3. Handle the error (check if it was an abort)
    if (error.name === 'AbortError') {
      console.error(`Request timed out after ${timeoutMs}ms`);
    } else {
      console.error('Fetch error:', error.message);
    }
  }
}

// Example usage with a real URL
const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
fetchWithTimeout(testUrl, 5000)
  .then(data => data && console.log('Data received:', data));