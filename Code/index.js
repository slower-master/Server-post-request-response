const express = require('express');
const app = express();//initializing express
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))//it parse the data comming from post request
app.use(express.json());//parsing data from json file for post request

app.listen(8000, () => {//starting the server
    console.log("listening on port 8000");

})

//sample data 
let DATA = [
    {
        rollno: '190304',
        coins: 200
    },
    {
        rollno: '190355',
        coins: 156
    },
    {
        rollno: '200456',
        coins: 10
    }
]

app.post('/coins', (req, res) => {

    const { Rollno } = req.body//extracting rollno  from request
    const data = DATA.find(c => c.rollno === Rollno)//finding infoormation about this roll no in our data 
    res.send(`here is your ${data.coins} IITK-coin`);//sending coins back to browser

})
