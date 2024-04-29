const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Unauthorized' });
    }
};

// Example route accessible only to admins
router.get('/admin-route', verifyToken, isAdmin, (req, res) => {
    res.json({ message: 'Welcome, Admin!' });
});

// Example route accessible to all authenticated users
router.get('/user-route', verifyToken, (req, res) => {
    res.json({ message: 'Welcome, User!' });
});

router.get('/', (req, res) => {
    res.send('jabaar project');
  });
