// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = 'yourSecretKeyHere'; // Use environment variables in production

const generateToken = (user) => {
    return jwt.sign({ 
        id: user._id,
        userId: user.userId 
    }, secret, {
        expiresIn: '7d',
    });
};

exports.register = async (req, res) => {
    try {
        const { email, password, userId } = req.body;
        
        // Check if required fields are present
        if (!email || !password || !userId) {
            return res.status(400).json({ error: 'Email, password, and userId are required' });
        }

        // Check if user already exists (both email and userId should be unique)
        const existingUser = await User.findOne({ 
            $or: [
                { email: email },
                { userId: userId }
            ]
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            if (existingUser.userId === userId) {
                return res.status(400).json({ error: 'User ID already exists' });
            }
        }

        const user = await User.create({ 
            email, 
            password,
            userId 
        });

        const token = generateToken(user);
        res.status(201).json({ 
            user: { 
                id: user._id, 
                userId: user.userId,
                email 
            }, 
            token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.status(200).json({ 
            user: { 
                id: user._id, 
                userId: user.userId,
                email 
            }, 
            token 
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};