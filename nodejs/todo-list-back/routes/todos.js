var express = require('express');
var router = express.Router();
const TodoTask = require('../models/TodoTask');

/**
 * Get all todo tasks
 * @method GET
 */
router.get('/', async function (req, res) {
    const todos = await TodoTask.find({});
    res.json(todos);
});

/**
 * Create one todo task
 * @method POST
 */
router.post('/', async function (req, res) {
    const { text, completed, color } = req.body.payload ?? {};
    const todoTask = new TodoTask({
        text,
        completed,
        color
    });

    try {
        await todoTask.save();
        res.json({ message: 'Todo task created!' });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

/**
 * Get one todo task by the given id
 * @method GET
 * @param id
 */
router.get('/:id', function (req, res) {});

/**
 * Modify one todo task by the given id
 * @method PUT
 * @param id
 */
router.put('/:id', async function (req, res) {
    const { id } = req.params ?? {};
    const { text, completed, color } = req.body.payload ?? {};
    const todo = await TodoTask.findById(id);

    todo.text = text ?? todo.text;
    todo.completed = completed ?? todo.completed;
    todo.color = color ?? todo.color;

    try {
        await todo.save();
        res.json({ message: `Todo task ${todo._id} updated` });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

/**
 * Delete one todo task by the given id
 * @method DELETE
 * @param id
 */
router.delete('/:id', async function (req, res) {
    const { id } = req.params ?? {};
    const todo = await TodoTask.findById(id);

    try {
        await todo.delete();
        res.json({ message: `Todo task ${todo._id} deleted` });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
});

module.exports = router;
