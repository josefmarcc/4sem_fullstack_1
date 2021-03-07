import fetch from "node-fetch";

function messageDelay(msg, delay) {
  return new Promise((resolve, reject) => {
    // setTimeout laver et callback
    setTimeout(() => {
      // hvis msg er under 0 reject.
      if (msg.length === 0) {
        reject("No message");
      }
      const upperCased = msg.toUpperCase();
      resolve(upperCased);
    }, delay);
  });
}

const promises = [
  messageDelay("hi", 1300),
  messageDelay("test", 700),
  messageDelay("more test", 600),
  messageDelay("promises are cool", 1500),
];

Promise.any(promises).then((umsg) => console.log(umsg));

//messageDelay("Hi class", 1000).then((umsg) => console.log(umsg));

const upperCased = messageDelay("jajga", 1000);
