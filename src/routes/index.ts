import { Router, Request, Response } from "express";
import { trainModel } from "src/models/train";

const router = Router();

router.post("/add-train", async (req: Request, res: Response) => {
  const { train_no, train_name, source, destination, fare, availability } = req.body;
  const resp = await trainModel.create({ train_no, train_name, source, destination, fare, availability });
  return res.status(200).send(resp);
});

export { router };
