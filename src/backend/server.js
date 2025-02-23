import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock database with updated QR codes
const validCodes = new Set([
    'secret-1234',
    'valid-5678',
    'test-9012'
]);

// Routes
app.get('/', (req, res) => {
    res.send('QR Verification Server is running');
});

app.get('/api/verify/:code', (req, res) => {
    try {
        const { code } = req.params;

        if (!code) {
            return res.status(400).json({ error: 'Missing verification code' });
        }

        // ✅ Compare directly to `validCodes`, no extra "http://localhost:4/" prefix
        const valid = validCodes.has(code.toLowerCase());

        setTimeout(() => {
            res.json({ valid });
        }, 500);

    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Error handling
app.use((req, res) => {
    res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
