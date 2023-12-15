import os from "os";

import dotenv from "dotenv";

import swaggerDoc from "./swagger.json";
import responses from "./responses";

const defaults = swaggerDoc.paths;

dotenv.config();

const paths = {
	...defaults,
	"/heartbeat": {
		get: {
			tags: ["HEART BEAT"],
			summary: "get heartbeat",
			description: "",
			parameters: [],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [],
		},
	},
	"/q2": {
		get: {
			tags: ["TWEETS"],
			description: "",
			"summary": "Get tweets based on parameters",
			"parameters": [
			{
				"name": "user_id",
				"in": "query",
				"description": "User ID",
				"required": true,
				"schema": {
				"type": "string"
				}
			},
			{
				"name": "type",
				"in": "query",
				"description": "Type of tweets (reply/retweet/both)",
				"required": true,
				"schema": {
				"type": "string",
				"enum": ["reply", "retweet", "both"]
				}
			},
			{
				"name": "phrase",
				"in": "query",
				"description": "Optional phrase",
				"required": false,
				"schema": {
				"type": "string"
				}
			},
			{
				"name": "hashtag",
				"in": "query",
				"description": "Optional hashtag",
				"required": false,
				"schema": {
				"type": "string"
				}
			}
			],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [],
		},
	},
};

const config = {
	swagger: "2.0",
	info: {
		version: "1.0.0.",
		title: "Twitter-analysis-app APIs Documentation",
		description: "",
	},
	servers: [
		{
			url: `http://localhost:${process.env.PORT}`,
			name: `${os.hostname()}`,
		},
		{
			url: `https://${process.env.HOST}`,
			name: `${os.hostname()}`,
		},
	],

	basePath: `/api/${process.env.API_VERSION || "v1"}`,
	schemes: ["http", "https"],
	securityDefinitions: {
		JWT: {
			type: "apiKey",
			name: "Authorization",
			in: "header",
		},
	},
	tags: [
		{
			name: "twitter-analysis-app APIs Documentation",
		},
	],
	consumes: ["application/json"],
	produces: ["application/json"],
	paths,
};
export default config;
