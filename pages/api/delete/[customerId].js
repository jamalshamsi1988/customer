import Customer from "../../../models/Customer";
import connectDB from "./../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
    console.log("Connected To DB");
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Data Deleted" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        status: "failed",
        message: "Error in Deleting Data ",
      });
    }
  }
}
