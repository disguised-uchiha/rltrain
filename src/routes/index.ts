import {
  Router,
  Request,
  Response
} from "express";

const router = Router();
const Train = require('../models/train');


router.post("/add-train", (req: Request, res: Response) => {
  const {
    train_no,
    train_name,
    source,
    destination,
    fare,
    availability
  } = req.body;
  console.log("🚀 >>> train_no, train_name, source, destination, fare, availability", train_no, train_name, source, destination, fare, availability);
  res.status(200).json({
    message: "success"
  });
});

router.delete("/delete-train/:id", async (req, res) => {
  try {
    const deletedTrainRecord = await Train.findByIdAndDelete(req.params.id);

    console.log()

    if (!deletedTrainRecord) {
      console.log("No such train found");
      res.status(404).send("No such train found. You had entered invalid id");
    } else {
      console.log("Train record deleted successfully");
      res.status(200).send("Train record deleted successfully");
    }
  } catch (error) {
    console.log("Error Occurred while deleting train record");
    res.status(500).send("Error Occurred while deleting record");
  }
})

export {
  router
};