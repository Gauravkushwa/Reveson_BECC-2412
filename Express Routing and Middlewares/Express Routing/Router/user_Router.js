const express = require('express');
const userRouter = express.Router();
userRouter.use(express.json());

const users = [
    { id: 1, user: 'Gaurav', password: 'gaurav@123' },
    { id: 2, user: 'Json', password: 'shiva@234' },
    { id: 3, user: 'Seeta', password: 'dear@112' }
];

// Display all users
userRouter.get('/users', (req, res) => {
    res.status(200).send(users);
});

// Add a new user
userRouter.post('/users', (req, res) => {
    const { user, password } = req.body;
    const newUser = { id: users.length + 1, user, password };
    users.push(newUser);
    res.status(201).send('User added successfully');
});

// Get a specific user by ID
userRouter.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.status(200).send(user);
});

// Update a specific user by ID
userRouter.put('/users/:id', (req, res) => {
    const updatedUser = users.find((u) => u.id === parseInt(req.params.id));
    if (!updatedUser) return res.status(404).send('Invalid user ID');
    
    const { user, password } = req.body;
    if (!user && !password) {
        return res.status(400).send('No fields to update');
    }

    if (user) updatedUser.user = user;
    if (password) updatedUser.password = password;

    res.status(200).send(updatedUser);
});

// Delete a specific user by ID
userRouter.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }

    // Remove the user from the array
    const deletedUser = users.splice(userIndex, 1);

    res.status(200).send({ message: 'User deleted successfully', deletedUser });
});

module.exports = userRouter;
