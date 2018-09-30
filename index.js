let express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const port = process.env.PORT || 5000;

app.post('/', (req, res)=>{
    let sessionId = req.param('sessionId');
    let serviceCode = req.param('serviceCode');
    let phoneNumber = req.param('phoneNumber');
    let text = req.param('text');
    let response;

    if (text == ""){
        response = "CON what would you want to check \n";
        response = response + "1. My Account \n" + "2. My Phone Number";
    }else if (text == "1"){
        response = "CON Choose account information you want to view \n";
        response = response + "1. Account Number \n" + "2. Account Balance\n";
    }else if(text == "2") {
        response = "END Your phone number is $phoneNumber";
    }else if(text == "1*1") {
        let accountNumber  = "ACC1001";
        response = "END Your account number is "+ accountNumber;
    } else if ( text == "1*2" ) {
        let balance  = "KES 10,000";
        response = `END Your balance is ${balance}`;
   }
   res.setHeader('Content-Type', 'text/plain');
   res.status(200).send(response);
   res.end();
});

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});