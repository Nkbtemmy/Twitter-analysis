import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { body } from "express-validator";

import SwaggerOptions from "./../docs";
import TweetController from "../controllers/tweetController";

const router = Router();

router.get(
	`/q2`,
	body("user_id").isInt({ min: 1 }),
	body("type").isIn(["reply", "retweet", "both"]),
	TweetController.getTweets,
);
router.get(`/heartbeat`, (req, res) => {
	return res.status(200).send({
		status: 200,
		message: "Heatbeat API endpoint",
	});
});

router.use("/", swaggerUi.serve, swaggerUi.setup(SwaggerOptions));

export default router;
