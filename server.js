const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes')
const dotenv = require('dotenv').config()

/* Installation express */
const app = express();

/* Cors Request */
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;

/* MongoDB connection via mongoose */
mongoose.connect('mongodb+srv://uygurberkay:123456Asd@cluster0.x0dcbwf.mongodb.net/netfliz',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('DB Connected') 
}).catch((err) => {
    console.log(err)
});

app.use('/api/user',userRoutes)

app.listen(PORT || 5000,console.log(`server started on port ${PORT}`))
