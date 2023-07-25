const express=require('express');
const app=express();
const payment=require('./routes/paymentRoutes')
const cors=require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api',payment);
app.get('/api/getKey',(req,res)=>{
    res.status(200).json({
        key:process.env.RAZORPAY_API_KEY
    })
})

module.exports=app;
