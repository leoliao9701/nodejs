// 1.安裝
// 2.引用
// 3.讀官方文件
const axios = require('axios');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
async function getUser(){
    try {
        const response = await axios.get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211');
        console.log(response);
    }catch (error){
        console.error(error);
    }
}

getUser();
