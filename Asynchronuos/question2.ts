//Write a JavaScript program that converts a callback-based function to a Promise-based function

// function getData(id: number, callback: { (err: any, result: any): void; (arg0: Error | null, arg1: { name: string; } | null): void; }) {
//   setTimeout(() => {
//     if (id === 1) {
//       callback(null, { name: "Sample Data" }); 
//     } else {
//       callback(new Error("Data not found"), null); 
//     }
//   }, 1000);
// }

// function getDataPromise(id: number) {
//   return new Promise((resolve, reject) => {
//     getData(id, (err, result) => {
//       if (err) {
//         reject(err); 
//       } else {
//         resolve(result); 
//       }
//     });
//   });
// }


// async function run() {
//   try {
//     const data = await getDataPromise(1);
//     console.log("Success:", data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
// run();

