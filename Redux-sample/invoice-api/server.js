const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

//dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let productItems = [
		{ id: 1, itemName: 'Milk', qty:1, rate:24, price:0  },
		{ id: 2, itemName: 'Curd', qty:3, rate:32, price:0},
		{ id: 3, itemName: 'Ice Cream', qty:3, rate:30, price:0},
		{ id: 4, itemName: 'Panner', qty:1, rate:60, price:0},
		{ id: 5, itemName: 'Rice', qty:1, rate:100, price:0},
];


app.get('/getAllProducts',(req,res) => res.send(productItems));

//app.get('/todos', (req, res) => res.send(todos));

// app.post('/todos', (req, res) => {
// 	const todo = { title: req.body.title, id: nanoid(), completed: false };
// 	todos.push(todo);
// 	return res.send(todo);
// });

// app.patch('/todos/:id', (req, res) => {
// 	const id = req.params.id;
// 	const index = todos.findIndex((todo) => todo.id == id);
// 	const completed = Boolean(req.body.completed);
// 	if (index > -1) {
// 		todos[index].completed = completed;
// 	}
// 	return res.send(todos[index]);
// });

// app.delete('/todos/:id', (req, res) => {
// 	const id = req.params.id;
// 	const index = todos.findIndex((todo) => todo.id == id);
// 	if (index > -1) {
// 		todos.splice(index, 1);
// 	}

// 	res.send(todos);
// });

const PORT = 3001;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
