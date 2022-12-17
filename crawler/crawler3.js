// 1.安裝
// 2.引用
// 3.讀官方文件
const axios = require('axios');
const fs = require('fs/promises');
const moment = require('moment/moment');


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
    let stockNo = await fs.readFile('stock.txt', 'utf-8');
    console.log(stockNo);
    let date = moment().format('YYYYMMDD');
    console.log(date);
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