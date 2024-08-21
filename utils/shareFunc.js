

export const methodAll = (req, res) => {
  return res.status(405).json({ message: 'method not allowed' });
} 