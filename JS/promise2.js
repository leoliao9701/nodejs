//Promise 為表示非同步運算最終成功或失敗的物件


//1.Promise 是一個物件new Promise()
//  newPromise(executor)
//  executor:function(resolve,reject) {}
//2.執行非同步工作
//3.完成or失敗
//if 完成 -> 呼叫 resolve
//if 失敗 -> 呼叫 reject

let doWorkPromise = function(job,timer) {
    //1. 物件 -> new
    return new Promise((resolve,reject) => {
        //2.執行非同步工作
        setTimeout(() => {
            let now = new Date();
            resolve(`完成工作 ${job} at ${now.toISOString()}`);
        },3000);
    });
};

let now = new Date();
console.log(`'開始工作' at ${now.toISOString()}`);
let brushPromise = doWorkPromise('刷牙', 3000);          
brushPromise
    .then((data) => {
        console.log('brushPromise', data);
        let eatPromise = doWorkPromise('吃早餐', 5000);
        return eatPromise;
    })
    .then((data) => {
        console.log('eatPromise', data);
        return doWorkPromise('寫功課', 3000);
    })
    .then((data) => {
        console.log('writePromise', data);
    })
    .catch((err) => {
        console.error('發生錯誤', err);
    })
    .finally(() => {
        console.log('I\'m finally');
    });


    //1. 題目有沒有想法
    //   直接copy 加註解
    //2. 把想法用程式寫出來