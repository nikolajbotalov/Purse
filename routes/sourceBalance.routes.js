import { Router } from 'express';
import { SourceBalance } from '../models/SourceBalance';

const router = Router();

// /api/sourcebalance/create
router.post('/create', async (req, res) => {
  try {
    const { balanceName, balance } = req.body;

    const sourceBalance = new SourceBalance({ balanceName, balance });

    await sourceBalance.save();
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});
