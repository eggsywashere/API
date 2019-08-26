import { MongoClient } from "../../db/client";
import { Response, Request } from "express";

export = async (req: Request, res: Response) => {
  if (typeof req.params.userId === "undefined") {
    res.send({ error: 1, message: "No user id providen." });
    return;
  }

  //* fetch versions from MongoDB
  var betaAccess = await MongoClient.db("PreMiD")
    .collection("betaAccess")
    .findOne({ userId: req.params.userId });

  if (betaAccess)
    //* Send response
    res.send({ userId: req.params.userId, access: true });
  else res.send({ userId: req.params.userId, access: false });
};
