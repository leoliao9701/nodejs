const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('test.txt', 'utf-8', (err,data) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
});

async function doJob() {
    let data = await p;
}

doJob();

//IIEF
(async () => {
    try{
        let data =await p;
        console.log('用 await拿到結果', data); 
    } catch (err) {
        console.error('發生錯誤',err);
    }
    
})();

