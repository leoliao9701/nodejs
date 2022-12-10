let doWorkPromise = function (job, timer) {
  //1. 物件 -> new
  return new Promise((resolve, reject) => {
    //2.執行非同步工作
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    },timer);
  });
};

let now = new Date();
console.log(`'開始工作' at ${now.toISOString()}`);


//await -->暫停鍵

async function doJob() {
    try{
        let result1 = await doWorkPromise('刷牙' ,3000);
        console.log('這是 await 後的結果1', result1);
        //return
      
        let result2 = await doWorkPromise("吃早餐", 5000);
        console.log('這是 await 後的結果2', result2);
      
        let result3 = await doWorkPromise("寫功課", 3000);
        console.log('這是 await 後的結果3', result3);
      } catch (e) {
        console.error('發生了錯誤', e)
      }
    }

doJob();
console.log("after");
