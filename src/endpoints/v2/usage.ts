import { RequestHandler } from "express";
import { cache } from "../../index";

//* Request Handler
const handler: RequestHandler = (_req, res) => {
	//* Return versions
	res.send({ users: cache.get("science").length });
};

//* Export handler
export { handler };
