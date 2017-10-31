const express = require('express');
// cài đặt và sử dụng cái này để dữ liệu gửi lên server như nào sẽ nhận được như vậy
const jsonParser = require('body-parser').json();
const app = express();
app.get('/',(req,res) => res.send('Hello world'));

app.post('/signin',jsonParser, (req,res) => {
    res.send(req.body);// sẽ trả về "name": "QuyDao"
    //res.send(req.body.name);// sẽ trả về : QuyDao
});
app.listen(3000,() => console.log('Server is running!'));