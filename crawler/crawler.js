// 1.安裝
// 2.引用
// 3.讀官方文件
const axios = require('axios');
axios
    .get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211')
    .then((response) => {
        console.log(response.data);
    })
    .catch((e) => {
        console.error(e);
    });
