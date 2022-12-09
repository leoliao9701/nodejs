//Promise 為表示非同步運算最終成功或失敗的物件


//1.Promise 是一個物件new Promise()
//  newPromise(executor)
//  executor:function(resolve,reject) {}
//2.執行非同步工作
//3.完成or失敗
//if 完成 -> 呼叫 resolve
//if 失敗 -> 呼叫 reject

let p = new Promise((resolve,reject)=>{
    // setTimeout 執行非同步工作
    setTimeout(()=>{
        let now = new Date();
        resolve(`完成工作 刷牙 at ${now.toISOString()}`);
    },3000);
});
// 初始狀態為pending (待辦的)
//if 同步工作成功 -> 呼叫resolve -> promise 狀態至轉為 fulfilled(履行)
//if 同步工作失敗 -> 呼叫reject -> promise 狀態至轉為 rejected(被拒絕)
p.then((data) => {
    console.log('拿回資料',data);
}).catch((error) => {
    console.log('發生問題', error);
});