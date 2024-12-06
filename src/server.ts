import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Product 1", price: 100, thumbnail: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 200, thumbnail: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 300, thumbnail: "https://via.placeholder.com/150" }
];

app.get("/products", (req: Request, res: Response) => {
  res.json(products);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});