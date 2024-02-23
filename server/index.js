const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://dpodev11:baba-0110@cluster0.7cizlg2.mongodb.net/')


app.post('/add', (req, res => {
  const task = req.body.task;
}))

app.listen(3001, () => {
  console.log("Server is Running")
})