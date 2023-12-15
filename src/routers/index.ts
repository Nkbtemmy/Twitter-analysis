import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import SwaggerOptions from "./../docs";
import TweetController from "../controllers/tweetController";

const router = Router();

router.use(`/`, swaggerUi.serve, swaggerUi.setup(SwaggerOptions));
router.get(`/q2`, TweetController.getTweets);
router.all(`/heartbeat`, (req, res) => {
	return res.status(200).send({
		status: 200,
		message: "Heatbeat API endpoint",
	});
});

router.use(`*`, (req, res) => {
	res.status(404).json({
		status: 404,
		message: `This endpoint ${req.originalUrl} is not exist`,
	});
});

export default router;
