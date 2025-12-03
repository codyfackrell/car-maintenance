import express from 'express';
import authRoutes from './routes/authRoutes.js';
import maintenanceRoutes from './routes/maintenanceRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRoutes);
app.use('/maintenance', maintenanceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
