require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/dbConn');
const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
const listController = require('./ListController')

//connect to mongoDB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const listRouter = express.Router();
app.use('/list', listRouter);


// app.get('/',(req, res) => {
//     res.send('Hello there!');
//     });
//post a new item
listRouter.post('/', listController.addListItem ,(req, res) => {
    return res.status(200).json({});
}
);
listRouter.get('/', listController.getList);



listRouter.patch('/:itemName', listController.updateListItem,(req, res) => {

});

listRouter.delete('/:itemName', listController.deleteListItem);


   

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
  });




mongoose.connection.once('open', () => {
     console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
