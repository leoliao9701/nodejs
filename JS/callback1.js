// let doWork = function (job, timer, cb) {
//   setTimeout(() => {
//     let now = new Date();
//     cb(null, `完成工作 ${job} at ${now.toISOString()}`);
//   }, timer);
// };

// let now = new Date();
// console.log(`工作開始 at ${now.toISOString()}`);
// // 刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
// doWork("刷牙", 3000, (err, data) => {
//   console.log(data);
//   doWork("吃早餐", 5000, (err, data) => {
//     console.log(data);
//     doWork("做作業", 3000, (err, data) => {
//       console.log(data);
//     });
//   });
// });

//Promise 是一個表示非同步運算的最終完成或失敗的物件
//  1.Promise 是一個物件 new Promise()
//  new Promise(executor)
//  executor: function(tesolve,reject){}

// let doWork = function (job, timer, cb) {
//   // 1.物件->new
//   return new Promise((resolve, rejeject) => {
//     //2. 執行非同步工作
//     setTimeout(() => {
//       let now = new Date();
//       resolve(`完成工作 ${job} at ${now.toISOString()}`);}timer);
//     });
//   });
// };
