const fs = require('fs');


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

fs.promises.readFile("./test.txt")
.then(function(result){
    console.log(""+result);
})
.catch(function(error){
    console.log(error);
})