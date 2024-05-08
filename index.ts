// callback hell

// let fruits: Array<string> = ["apple", "banana", "kiwi"];

// const animateAll = (animate: (fruit: string) => void) => {
//   setTimeout(() => {
//     animate(fruits[0]);
//     setTimeout(() => {
//       animate(fruits[1]);
//       setTimeout(() => {
//         animate(fruits[2]);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// const animate = (fruit: string) => {
//   console.log("animating", fruit);
// };

// animateAll(animate);

// ./callback hell

// /////////////////////////////////////////////////

// promises

// let fruits: Array<string> = ["apple", "banana", "kiwi"];

// const animateOne = (fruit: string, animate: (fruit: string) => void) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       animate(fruit);
//       res(true);
//     }, 2000);
//   });
// };

// const animateAll = (animate: (fruit: string) => void) => {
//   animateOne(fruits[0], animate)
//     .then(() => {
//       animateOne(fruits[1], animate);
//     })
//     .then(() => {
//       animateOne(fruits[2], animate);
//     })
//     .catch((err) => {
//       console.log("some error occurred", err);
//     });
// };

// const animate = (fruit: string) => {
//   console.log("animating", fruit);
// };

// animateAll(animate);

// ./promises

// ///////////////////////////////////////////////

// asynk/await

let fruits: Array<string> = ["apple", "banana", "kiwi"];

const animateOne = (fruit: string, animate: (fruit: string) => void) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      animate(fruit);
      res(true);
    }, 1000);
  });
};

const animateAll = async (animate: (fruit: string) => void) => {
  await animateOne(fruits[0], animate);
  await animateOne(fruits[1], animate);
  await animateOne(fruits[2], animate);
};

const animate = (fruit: string) => {
  console.log("animating", fruit);
};

animateAll(animate);
