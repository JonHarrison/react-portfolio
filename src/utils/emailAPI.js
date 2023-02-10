// This code is meant to serve as a mock send to an email API.
export const postMessage = new Promise(function(resolve) {
    setTimeout(() => {
      resolve({
        result : true,
      });
    }, 2000);
  });
  