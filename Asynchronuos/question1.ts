// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

const invokeAfterDelay = (callback: string) => {
  setTimeout(callback, 2000);
};

invokeAfterDelay(() => {
  console.log("Hello how are you");
});
