import { Router, Request, Response } from "express";

const router = Router();

router.post("/add-train", (req: Request, res: Response) => {
  const { train_no, train_name, source, destination, fare, availability } = req.body;
  console.log("🚀 >>> train_no, train_name, source, destination, fare, availability", train_no, train_name, source, destination, fare, availability);
  res.status(200).json({ message: "success" });
});

export { router };