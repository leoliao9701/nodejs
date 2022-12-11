// 1.安裝
// 2.引用
// 3.讀官方文件
const axios = require('axios');
const fs = require('fs/promises');


// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
// async function getUser(){
//     try {
//         const response = await axios.get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211');
//         console.log(response);
//     }catch (error){
//         console.error(error);
//     }
// }

// getUser();

// const axios = require('axios');
// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
// let file = new Promise((resolve,reject) =>{
//     //error callback
//     reject(err)
// })

(async () => {
  try {
    let data = await fs.readFile('stock.txt', 'utf-8');
    let stockNo = data ;
    let date = '20221111';
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();