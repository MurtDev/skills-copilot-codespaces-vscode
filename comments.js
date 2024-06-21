// Create web server with the following API:
// - GET /comments - respond with a list of comments
// - POST /comments - add a new comment
// - PUT /comments/:id - update a comment
// - DELETE /comments/:id - delete a comment

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [
  { id: 1, author: 'user1', content: 'comment1' },
  { id: 2, author: 'user2', content: 'comment2' },
  { id: 3, author: 'user3', content: 'comment3' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { author, content } = req.body;
  const id = comments.length + 1;
  comments.push({ id, author, content });
  res.json(comments);
});

app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { author, content } = req.body;
  const comment = comments.find(comment => comment.id === id);
  comment.author = author;
  comment.content = content;
  res.json(comments);
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

