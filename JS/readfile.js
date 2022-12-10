const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) {
//         //如果 err 有值 ,表示發生錯誤
//         //這裡應該要處理錯誤
//         console.error('發生了錯誤', err);
//     }else{
//         //進來這邊 ,表示err 是空的 (可能是 null)
//         console.log('成功讀到資料:', data);
//     }
// });

// fs.promises
//   .readFile("./test.txt")
//   .then(function (result) {
//     console.log("" + result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//Promise 是一個非同步運算的最終完成或失敗物件
let p = new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

p.then((data)=> {
    console.log('我是 then', data);
}).catch((err)=>{
    console.error('我是 then', err);

});
